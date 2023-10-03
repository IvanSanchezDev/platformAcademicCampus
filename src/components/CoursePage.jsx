import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import SectionsVideos from "./SectionsVideos/SectionsVideos";
import { useState, useEffect, useMemo } from "react";
import {  useLocation, useParams } from "react-router-dom"
import { useUrl } from "../context/urlContext";
import { useInscripcion } from "../context/inscripcionContext";
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarVideos from "./SectionsVideos/NavbarVideos";
import ReactPlayer from 'react-player'


const CoursePage=()=>{
    const { state } = useLocation()
    const {nameCourse}=useParams();
    const {user}=useAuth()
    const{establecerNombreCourse, url, texto}=useUrl()
    const {verificarInscripcion, isEnrolled}=useInscripcion()
    const [listSections, setSections]=useState([])
    const navigate = useNavigate();
    const videoKey = useMemo(() => Math.random(), [url]);
    const [isLoading,setLoading]=useState(true)

    useEffect(() => {
        verificarInscripcion(user.nombre_usuario, nameCourse);
      }, []);

      useEffect(() => {
        (async () => {
            try {
                if (isEnrolled) {
                    const response = await fetch(`http://192.168.128.23:5010/cursos/v2?course=${nameCourse}`);
                    const result = await response.json();
                    setLoading(false);
                    setSections(result);
                    establecerNombreCourse(nameCourse);
                }
                
                
            } catch (error) {
                console.log(error);
                
            }
        })();
    }, [nameCourse, url, isEnrolled]);
    
    useEffect(() => {

        if (!isLoading && !isEnrolled) {
            navigate(`/detailsCourse/${nameCourse}`);
        }
    }, [isLoading, isEnrolled, nameCourse]);

    return(
        <>
         <NavbarVideos tituloCourse={state ? state.titulo : "Título no disponible"} nameCourse={nameCourse} />
        <Container fluid>
        <Row>
        <Col lg={9}>
        {url ? ( 
            <div style={{ width: '100%' }}>
              <video controls style={{ width: '100%' }} autoPlay key={videoKey}>
                <source src={url} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="fs-20 flex flex-center mt-5">
                <div style={{ width: '50%' }}>
                    {texto.toString()}
                </div>
               
            </div> // Muestra un div con texto si no hay video
          )}
        </Col>
        <Col lg={3} >
            {isLoading ? <div>Cargandooo...</div> : <SectionsVideos listSection={listSections} />}
            
        </Col>
      </Row>
                
            
        </Container>
        
            
            
        </>
        
        )
}

export default CoursePage