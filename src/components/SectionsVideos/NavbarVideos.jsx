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
import {AiOutlineStar} from "react-icons/ai"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from '@mui/material/Alert';


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
  width: 'auto',
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
          curso: nameCourse,
          avatar:user.imagen_perfil,
          discordId:user.discord_id,
          fecha:new Date()
        }
        if(data.texto && data.rating){
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
        }
        
      } catch (error) {
        console.log(error);
      }
    }



    return(
        <NavbarWrapper className='flex'>       
            <Container fluid>
              <Row className="align-items-center">
                <Col xs={2}>
                  <div className="titulo" style={{marginLeft:'20px'}}>
                    <Link to="/home" className="navbar-brand text-uppercase ls-1 fw-8">
                      <span>C</span>ampusAcademic
                    </Link>
                  </div>
                </Col>
                <Col xs={3} className="d-none d-md-block">
                  <div className="fs-16 subtitulo mt-1" style={{marginLeft:'-10px', color:'white'}}>
                    <div className="vr linea" style={{ color:'white'}}></div>
                    <Link style={{marginLeft:'40px',color: 'white', textDecoration:'none'}}  className='name' to={`/detailsCourse/${nameCourse}`}>{tituloCourse}</Link>
                  </div>
                </Col>

                <Col className="d-flex justify-content-center calificacion">
                  <div className="flex">
                      <Button onClick={handleOpen} className='btnCalificacion'>
                        <AiOutlineStar style={{marginRight:'3px', color: 'white', fontSize: '20px'}} className='icono ml-auto'/> 
                        <span style={{color: 'white', fontSize: '14px'}} className='textoo'>Calificar este curso</span>
                      </Button>
                    
                  </div>
                </Col>

                
              </Row>
            </Container>


            <div>
           
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="responsive-modal">
    <Typography variant="h6" component="h2" sx={{ fontSize: '22px', fontWeight: 'bold' }}>
      ¿Cómo calificarías este curso?
    </Typography>
    <Rating
      name="simple-controlled"
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
        setShowTextField(true);
      }}
      sx={{ mt: 3, fontSize: '50px' }}
    />

      <TextField
        sx={{
          mt:5,
          width: '100%', // Usa el 100% del ancho disponible
          '& .MuiInputBase-input': {
            fontSize: '18px', // Tamaño de fuente deseado para el input
          },
        }}
        id="outlined-textarea"
        placeholder="Deja tu Comentario"
        multiline
        value={comentario}
        onChange={(e) => setNuevoComentario(e.target.value)}
      />
    

    {!message ? (
      <Button
        onClick={() => {
          enviarComentario();
        }}
        sx={{
          mt: 3,
          fontSize: '15px',
          padding: '10px 20px',
          backgroundColor: '#2D2F31',
          color: 'white',
          border: 'none',
        }}
      >
        Enviar
      </Button>
    ) : (
      <Typography>
        <Alert severity="success" className="mt-5">
          {message}
        </Alert>
      </Typography>
    )}
  </Box>
</Modal>

    </div>        
        </NavbarWrapper>
    )
}

const NavbarWrapper=styled.nav`
height: 80px; 
background-color:#2D2F31;


.navbar-brand{
  font-size: 20px;
  color:white;
  span{
    color: var(--clr-orange);
  }
}

@media (max-width: 1450px) { 
  .subtitulo{
    display:none;
  }

}


@media (max-width: 767px) { 
.navbar-brand{
  font-size: 10px;

}





.textoo{
  display:none;
}

  }


`;

export default NavbarVideos