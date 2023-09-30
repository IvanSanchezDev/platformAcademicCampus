import Container from 'react-bootstrap/Container';
import InfoCourse from "./InfoCourse";
import styled from "styled-components"
import { useLocation } from 'react-router-dom';
import { Layout } from '../Layout';

export const OpinionesCourse=()=>{

    const { state } = useLocation()

    const {nombre, portada, comentarios}=state
    
    

    return (
        <SingleCourseWrapper>
             <Layout/>
            <Container className="">
              <InfoCourse nombreCourse={nombre} portadaCourse={portada}/>          
            </Container>
             <Container className="opiniones">
                    <div>
                      <h2 className="fs-40 mb-5">Opiniones sobre este curso</h2>
                    </div>
                    <div className="comments d-flex  flex-wrap">
                    {comentarios && comentarios.map((comentario, index) => {
                        
                        return(
                            <div key={index} className='comment d-flex flex-column'>
                                <span className='fs-18 fw-7'>{comentario.nombre_usuario}:</span><span className='fs-16 fw-5 opacity-09 textoo'>{comentario.texto}</span>
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


      h2{
       
        font-weight: 700;
        color: #212121;
        
    }

    .secondColumn{
      margin-left:10rem;
    }
    .details, .opiniones{
      margin-top:20rem;
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
        
    
     
    
    `;


