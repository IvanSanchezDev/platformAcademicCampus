import styled from 'styled-components'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { useAuth } from '../../context/authContext';


const style = {
  display:'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  fontSize:'400px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 'auto',
  bgcolor: 'background.paper',
  p:4,
};


const NavbarVideos=({tituloCourse, nameCourse})=>{
  const [rating, setRating] = useState(0)
  const [comentario, setNuevoComentario] =useState("")
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showTextField, setShowTextField] = useState(false);
  const [message, setMessage]=useState('')



  const {user}=useAuth()


    const enviarComentario=async ()=>{
      try {
        const data={
          nombre: user.nombre_usuario,
          rating:rating,
          texto:comentario,
          curso: nameCourse
        }
        const response=await fetch('http://localhost:5124/api/curso/hacerComentario',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify(data),
      })

      const result=await response.json()
      setMessage(result.message)
      } catch (error) {
        console.log(error);
      }
    }



    return(
        <NavbarWrapper className='flex'>
            <Container className='w-100 d-flex ' fluid>
                <div className='titulo'>
                    <Link to='/home' className='navbar-brand text-uppercase ls-1 fw-8'>
                        <span>C</span>ampusAcademic                
                    </Link>                
                </div>
                <div className="vr"></div>
                <div className='fs-16 subtitulo flex '>
                  <Link to={`/detailsCourse/${nameCourse}`} >{tituloCourse}</Link>           
                </div>

                <div className='flex flex-end'>
                <Button onClick={handleOpen}>Open modal</Button>
                </div>
            </Container>  
            <div>
           
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
        <Box sx={style}>
          <Typography className="modal-modal-title fs-20 fw-7" variant="h6" component="h2"  sx={{ fontSize: '22px', fontWeight: 'bold' }}>
            ¿Como calificarias este curso?
          </Typography>
          <Typography className="modal-modal-description" >
          <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
          setShowTextField(true);
        }}
        sx={{ mt:3,
          fontSize: '50px', 
        }}/>
       
          </Typography>
          

          <Typography className="modal-modal-title fs-20 fw-7" variant="h6" component="h2"  sx={{ mt:5 }}>
          <TextField sx={{  width: 500, '& .MuiInputBase-input': {
        fontSize: '18px', // Tamaño de fuente deseado para el input
      }, }}
          id="outlined-textarea"
          placeholder="Deja tu Comentario"
          multiline
          value={comentario}
          onChange={(e)=> setNuevoComentario(e.target.value)}
        />
          </Typography >


          <Button onClick={enviarComentario} sx={{ mt:2 }}>Enviar</Button>
          {message &&  <Typography className="modal-modal-description" >{message}</Typography>}

        </Box>
        
      </Modal>
    </div>        
        </NavbarWrapper>
    )
}

const NavbarWrapper=styled.nav`
height: 80px; 


.titulo, .subtitulo, .vr{
  margin-left: 10px;
}


.subitulo:hover{
  color:#481593;
}



.navbar-brand{
  font-size: 20px;
  span{
    color: var(--clr-orange);
  }
}



`;

export default NavbarVideos