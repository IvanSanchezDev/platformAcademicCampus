import styled from "styled-components"
import {MdInfo} from "react-icons/md";
import {TbWorld} from "react-icons/tb";
import {BiCheck} from "react-icons/bi";
import {RiClosedCaptioningFill} from "react-icons/ri";
import { useEffect, useState } from "react";
import {Comments} from './Comments'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../../context/authContext';
import { useInscripcion } from "../../context/inscripcionContext";
import { Link } from "react-router-dom";



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
          <div className='course-intro mx-auto grid'>
            <div className='course-img'>
            <Card style={{ width: '30rem' }}>
              <Card.Img variant="top" src={portada} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                {isEnrolled ? (
                  <Link to={`/course/${nombreCurso}`}><Button variant="primary">Ir al curso</Button></Link>
                 
                ) : (
                  <>
                    <Button variant="primary" onClick={handleInscripcion}>
                      Obtener el curso
                    </Button>
                    {message && <p>{message}</p>}
                  </>
                )}
                {(message) &&<p>{message}</p>}
              </Card.Body>
            </Card>
            </div>
            <div className='course-details'>
              <div className='course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block'>programmming</div>
              <div className='course-head'>
                <h5>{titulo}</h5>
              </div>
              <div className='course-body'>
                <p className='course-para fs-18'>{nombre}</p>
                <div className='course-rating flex'>
                  <span className='students-count fs-14'>100542</span>
                </div>
    
                <ul className='course-info'>
                  <li>
                    <span className='fs-14'>Created by <span className='fw-6 opacity-08'></span>{autor}</span>
                  </li>
                  <li className='flex'>
                    <span><MdInfo /></span>
                    <span className='fs-14 course-info-txt fw-5'>Last updated </span>
                  </li>
                  <li className='flex'>
                    <span><TbWorld /></span>
                    <span className='fs-14 course-info-txt fw-5'>ES</span>
                  </li>
                  <li className='flex'>
                    <span><RiClosedCaptioningFill /></span>
                    <span className='fs-14 course-info-txt fw-5'>Español [automático] </span>
                  </li>
                </ul>
              </div>
    
              <div className='course-foot'>
                <div className='course-price'>
                  <span className='new-price fs-26 fw-8'></span>
                  <span className='old-price fs-26 fw-6'></span>
                </div>
              </div>
    
             
            </div>
          </div>
    
          <div className='course-full bg-white text-dark'>
            <div className='course-learn mx-auto'>
              <div className='course-sc-title'>Que aprenderas</div>
              <ul className='course-learn-list grid'>
            {
              objetivos && objetivos.map((learnItem, idx) => {
                return (
                  <li key = {idx}>
                    <span><BiCheck /></span>
                    <span className='fs-14 fw-5 opacity-09'>{learnItem}</span>
                  </li>
                )
              })
            }
          </ul>
            </div>
    
            <div className='course-content mx-auto'>
              <div className='course-sc-title'>Contenido del Curso</div>
              <ul className='course-content-list'>
            {
              temas && temas.map((contentItem, idx) => {
                return (
                  <li key = {idx}>
                    <span>{contentItem}</span>
                  </li>
                )
              })
            }
          </ul>
            </div>

            <div className="comentarios mx-auto">
                {isLoading? <div>Cargando...</div>:<Comments nombreCurso={nombre} listComments={comentarios}/>}
            </div>
          </div>
        </SingleCourseWrapper>
      )
    }
    
    const SingleCourseWrapper = styled.div`
      background: var(--clr-dark);
      color: var(--clr-white);
    
      .course-intro{
        padding: 40px 16px;
        max-width: 992px;

        
    
        .course-details{
          padding-top: 20px;
        }
    
        .course-category{
          padding: 0px 8px;
          border-radius: 6px;
        }
    
        .course-head{
          font-size: 38px;
          line-height: 1.2;
          padding: 12px 0 0 0;
        }
        .course-para{
          padding: 12px 0;
        }
        .rating-star-val{
          margin-right: 7px;
          padding-bottom: 5px;
          color: var(--clr-orange);
        }
        .students-count{
          margin-left: 8px;
        }
        .rating-count{
          margin-left: 6px;
          color: #d097f6;
        }
        .course-info{
          li{
            margin-bottom: 2px;
            &:nth-child(2){
              margin-top: 10px;
            }
          }
          .course-info-txt{
            text-transform: capitalize;
            margin-left: 8px;
            margin-bottom: 4px;
          }
        }
        .course-price{
          margin-top: 12px;
          .old-price{
            color: #eceb98;
            text-decoration: line-through;
            margin-left: 10px;
          }
        }
        .course-btn{
          margin-top: 16px;
          .add-to-cart-btn{
            padding: 12px 28px;
            span{
              margin-left: 12px;
            }
          }
        }
    
        @media screen and (min-width: 880px){
          grid-template-columns: repeat(2, 1fr);
          column-gap: 40px;
          .course-details{
            padding-top: 0;
          }
          .course-img{
            order: 2;
          }
        }
    
        @media screen and (min-width: 1400px){
          grid-template-columns: 60% 40%;
        }
      }
    
      .course-full{
        padding: 40px 16px;
        .course-sc-title{
          font-size: 22px;
          font-weight: 700;
          margin: 12px 0;
        }
        .course-learn{
          max-width: 992px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 12px 28px 22px 28px;
    
          .course-learn-list{
            li{
              margin: 5px 0;
              display: flex;
              span{
                &:nth-child(1){
                  opacity: 0.95;
                  margin-right: 12px;
                }
              }
            }
    
            @media screen and (min-width: 992px){
              grid-template-columns: repeat(2, 1fr);
            }
          }
        }
    
        .course-content{
          max-width: 992px;
          margin-top: 30px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 12px 28px 22px 28px;
    
          .course-content-list{
            li{
              background-color: #f7f9fa;
              padding: 12px 18px;
              border: 1px solid rgba(0, 0, 0, 0.2);
              margin-bottom: 10px;
              font-weight: 800;
              font-size: 15px;
            }
          }
        }

        .comentarios{
            max-width: 992px;
            margin-top: 30px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            padding: 12px 28px 22px 28px;
        }
      }
    
    `;






export default DetalleCourse