import styled from "styled-components"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoCourse from "./InfoCourse";
import { useQuery } from "react-query";
import axios from "axios";

const fetchTraerCursoByName=async(nombreCurso)=>{
  
  const response = await axios.get(
    `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/curso/traerCursoByName?nombre=${nombreCurso}`,
    {
     withCredentials:true
    }
  );
  

  
  return response.data
}




const DetalleCourse=({nombreCurso})=>{

  const {isLoading, error, data}=useQuery(
    'infoCourse', ()=>fetchTraerCursoByName(nombreCurso)
  )

  if(isLoading) return 'Cargandoo...'


  if (error) {
    
    return 'Ha ocurrido un error' + error;
  }
     

  
  
    
      
    
    return (
        <SingleCourseWrapper>
            <Container className="">
              <InfoCourse nombreCourse={data.data.nombre} portadaCourse={data.data.portada} comentarios={data.data.comentarios}/>
              <Row className="details">
                <Col>
                  <div>
                    <h2 className="fs-35 mb-5">Con este curso aprenderas</h2>
                  </div>
                  <div className="cards d-flex flex-column">
                      {
                          data.data.objetivos && data.data.objetivos.map((learnItem, idx) => {
                            return (
                              <div key = {idx} className="card d-flex">
                               
                                <span className='fs-20 fw-4 opacity-09'>  {learnItem}</span>
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
                      data.data.temas && data.data.temas.map((contentItem, idx) => {
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
            
          
        </SingleCourseWrapper>
      )
    }
    
    const SingleCourseWrapper = styled.div`
      background-color: #EDEDED;
      height:100vh;

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