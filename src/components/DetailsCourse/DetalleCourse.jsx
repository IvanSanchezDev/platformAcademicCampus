import styled from "styled-components"

import { useEffect, useState } from "react";
import {BiCheck} from "react-icons/bi";

import { useAuth } from '../../context/authContext';
import { useInscripcion } from "../../context/inscripcionContext";
import {Comments} from './Comments'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const DetalleCourse=({nombreCurso})=>{
  const {user}=useAuth()
  const {inscripcionCurso, verificarInscripcion, message, isEnrolled}=useInscripcion()
    const [info, setInfo]=useState({})
    const [isLoading, setIsLoading] = useState(true);


    const handleInscripcion=()=>{
      
        inscripcionCurso(user.nombre_usuario, nombreCurso)
    }
   
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

      
     

      
      const {nombre, titulo, autor, portada, objetivos, temas, comentarios}=info
      
    
    return (
        <SingleCourseWrapper>
            <Container className="">
              <Row className="pt-5 ">
                <Col>
                <div className="mb-5">
                  <h2 className="fs-40">Curso {nombre}</h2>
                </div>
                <div>
                  <p className="fs-21 fw-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat dignissimos aspernatur, impedit aperiam corrupti, molestias odit numquam sed necessitatibus, veniam odio maiores quidem saepe dolores? Beatae laudantium nostrum consequatur!</p>
                </div>
                  
                </Col>
                <Col className="secondColumn" >
                  <div className="imagen mr-5">
                    <img src={portada} alt="" />
                  </div>
                </Col>
              </Row>
              <Row className="details">
                <Col>
                  <div>
                    <h2 className="fs-35 mb-5">Con este curso aprenderas</h2>
                  </div>
                  <div className="cards d-flex flex-column">
                      {
                          objetivos && objetivos.map((learnItem, idx) => {
                            return (
                              <div key = {idx} className="card d-flex">
                               
                                <span className='fs-20 fw-4 opacity-09'> <span><BiCheck /></span >    {learnItem}</span>
                              </div>
                            )
                          })
                        }
                  </div>
                </Col>
                <Col className="secondColumn" >
                <div>
                    <h2 className="fs-35 mb-5">Temas</h2>
                  </div>
                  <div className="lists">
                    {
                      temas && temas.map((contentItem, idx) => {
                        return (
                          <div key = {idx} className="list">
                            <span className="fs-20 fw-4">{contentItem}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </Col>
                
              </Row>
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
      background-color: #EDEDED;
      height:200vh;

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






export default DetalleCourse