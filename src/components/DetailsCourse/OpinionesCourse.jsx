import Container from 'react-bootstrap/Container';
import InfoCourse from "./InfoCourse";
import styled from "styled-components"
import { useLocation } from 'react-router-dom';
import { Layout } from '../Layout';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';



export const OpinionesCourse=()=>{

    const { state } = useLocation()

    const {titulo, nombre, duracion,  portada, comentarios}=state
    
   

    return (
        <SingleCourseWrapper>
             <Layout/>
            <Container className="">
              <InfoCourse nombreCourse={nombre} portadaCourse={portada} titulo={titulo} duracion={duracion}/>          
            </Container>
             <Container className="opiniones">
                    <div>
                      <h2 className="fs-40 mb-5">Opiniones sobre este curso</h2>
                    </div>
                    <div className="comments d-flex  flex-wrap">
                    {comentarios && comentarios.map((comentario, index) => {
                         
                        return(
                            <div key={index} className='comment d-flex flex-column'>
                                <div className='flex'>
                                  <Avatar alt="Remy Sharp" src={`https://cdn.discordapp.com/avatars/${comentario.discord_id}/${comentario.imagen_perfil}.png`} />
                                  <div className='flex flex-column info' style={{marginLeft:'20px'}}>
                                    <span className='fs-20 fw-7'>{comentario.nombre_usuario}</span>
                                    <Rating name="half-rating-read" className="mt-2 custom-rating" defaultValue={comentario.rating} readOnly />
                                  </div>
                                  
                                </div>
                                
                                
                                <span className='fs-14  opacity-09 textoo mt-5'>{comentario.texto}</span>
                            </div>
                        )
                    })}
                  </div>
            </Container> 
          
        </SingleCourseWrapper>
      )
    }
    
    const SingleCourseWrapper = styled.div`
      background-color: #F7F7F7;
      height:200vh;

      
      .custom-rating {
        font-size: 26px; 
        color:#481593;
      }
      
      .custom-button {
        background-color:tranparent;
        text-decoration:none;
        color:#481593;
        font-size: 22px; 
        font-weight:400px;
      }

      .custom-button:hover {
        text-decoration: underline;
      }

      .buttons{

       

        .btnVolver{
          font-size: 24px;
          padding: 12px 24px;
          background-color:#481593;
          color:yellow;
          border: none;
        }

        
      }

      h2{
       
        font-weight: 700;
        color: #212121;
        
    }

   
    .details, .opiniones{
      margin-top:100px;
    }

     .temario{
      margin-top:10rem;
    }
      
    .cards{
    gap:3rem;

    .card{
      box-shadow:rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
      border:none;
      border-radius: 7px;
      padding:20px 20px;
      background-color:#FFFFFF;
      margin-button:10px;
      color:#212121;
  }
    }
    
    .lists{
      line-height: 2;
    }


    .comments{

      gap:3rem;

      .comment{
        padding:30px 30px;
        width:400px;
        background-color:#FFFFFF;
        border:none;
      border-radius: 7px;
      box-shadow:rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

      }
    }
        
    @media (max-width: 767px) { 
      h2 {
        font-size: 27px; 
      }
      p {
        font-size: 18px; 

      span{
        font-size: 14px;
      }

      
      
    }
    
    `;


