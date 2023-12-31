import styled from "styled-components"

import { useEffect, useState } from "react";
import {BiCheck} from "react-icons/bi";
import CheckIcon from '@mui/icons-material/Check';
import { useAuth } from '../../context/authContext';
import { useInscripcion } from "../../context/inscripcionContext";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoCourse from "./InfoCourse";




const DetalleCourse=({nombreCurso})=>{
  const {user}=useAuth()
  const {inscripcionCurso, verificarInscripcion, message, isEnrolled}=useInscripcion()
    const [info, setInfo]=useState({})
    const [isLoading, setIsLoading] = useState(true);


    
   
    useEffect(() => {
      verificarInscripcion(user.nombre_usuario, nombreCurso);
    }, []);

    useEffect(() => {
        (async () => {
          try {
            const response = await fetch(
              `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/curso/traerCursoByName?nombre=${nombreCurso}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: 'include',
              }
            );
            
            const result = await response.json();
            
           setInfo(result.data)
           setIsLoading(false)
          } catch (error) {
            console.log(error);
            
          }
        })();
      }, []);

      
     

      
      const {folder, nameCourse, duracion, imagenCourse, objetivos, temas, mensaje_bienvenida, comentarios}=info

      
    
    return (
        <SingleCourseWrapper>
            <Container className="">
              <InfoCourse  titulo={nameCourse} nombreCourse={folder} portadaCourse={imagenCourse} comentarios={comentarios} duracion={duracion} mensaje={mensaje_bienvenida}/>
              <Row className="details">
                <Col xs={12} md={6} >
                  <div>
                    <h2 className="fs-35 mb-4">Con este curso aprenderas</h2>
                  </div>
                  <div className="cards d-flex flex-column">
                      {
                          objetivos && objetivos.map((learnItem, idx) => {
                            return (
                              <div key = {idx} className="card d-flex">
                               
                                <span className='fs-20 fw-4 opacity-09'> <CheckCircleIcon sx={{fontSize:'22px'}}/> {learnItem}</span>
                              </div>
                            )
                          })
                        }
                  </div>
                </Col>
                <Col className="secondColumnTemas flex flex-column mt-5"  >
                <div className="">
                    <h2 className="fs-35 mb-5">Temas</h2>
                  </div>
                  <div className="lists">
                    {
                      temas && temas.map((contentItem, idx) => {
                        return (
                          <div key = {idx} className="list">
                            <span className="fs-20 fw-4"> <CheckIcon/> {contentItem}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </Col>
                
              </Row>
            </Container>
            
          
        </SingleCourseWrapper>
      )
    }
    
    const SingleCourseWrapper = styled.div`
      background-color: #EDEDED;
      height:120vh;

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

        .btnInscribirse{
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
        
    
    @media (max-width: 767px) { 
      height:190vh;
     
      .details{
        margin-top:40px;
      }

      h2 {
        font-size: 27px; 
      }
      p {
        font-size: 18px; 

      span{
        font-size: 14px;
      }

      .custom-rating, .custom-button{
        font-size: 14px;
        margin-right: 10px;
        
      }

      .secondColumn{
        margin-top:50px;

        
      
        .imagen{
          text-align: center;
          margin-left: 30px;
        }
      }

      .secondColumnTemas{
        margin-top:100px;
      }


      
     

    }
    
    `;






export default DetalleCourse