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


const CoursePage=()=>{
    const { state } = useLocation()

    const {titulo}=state
    const {nameCourse}=useParams();
    const {user}=useAuth()
    const{establecerNombreCourse, url}=useUrl()
    const {verificarInscripcion, isEnrolled}=useInscripcion()
    const [listSections, setSections]=useState([])
    const navigate = useNavigate();
    const videoKey = useMemo(() => Math.random(), [url]);

    useEffect(() => {
        verificarInscripcion(user.nombre_usuario, nameCourse);
      }, []);

    useEffect(()=>{
        (async()=>{
            try {
                if (!isEnrolled) {
                        navigate(`/detailsCourse/${nameCourse}`); // Redirige a una página de error
                } else {
                    const response=await fetch(`http://192.168.128.23:5010/cursos?course=${nameCourse}`);
                    const result=await response.json();                
                    setSections(result)
                    establecerNombreCourse(nameCourse)
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [nameCourse, url])

    console.log(url);

    return(
        <>
        <NavbarVideos tituloCourse={titulo} nameCourse={nameCourse}/>
        <Container fluid>
        <Row>
        <Col lg={9}>
            <div style={{width:'100%'}}>
                <video controls style={{width:'100%'}} autoPlay key={videoKey} >
                    <source src={url} type="video/mp4" /> 
                </video>
            </div>
        </Col>
        <Col lg={3}><SectionsVideos listSection={listSections} /></Col>
      </Row>
                
            
        </Container>
        
            
            
        </>
        
        )
}

export default CoursePage