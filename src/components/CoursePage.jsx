import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import SectionsVideos from "./SectionsVideos/SectionsVideos";
import { useState, useEffect, useMemo } from "react";
import {  useParams } from "react-router-dom"
import { useUrl } from "../context/urlContext";


const CoursePage=()=>{
    const {nameCourse}=useParams();
    const{establecerNombreCourse, url}=useUrl()
    
    const [listSections, setSections]=useState([])
    const videoKey = useMemo(() => Math.random(), [url]);

    useEffect(()=>{
        (async()=>{
            try {
                
                const response=await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/cursos?course=${nameCourse}`);
                const result=await response.json();
                
                setSections(result)
                establecerNombreCourse(nameCourse)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [nameCourse, url])

    console.log(url);

    return(
        <>
        <Layout/>
        <Container>
        <video controls width="1300" autoPlay key={videoKey} >
          <source src={url} type="video/mp4" />
         
        </video>     
        
        </Container>
        <Container>
            <SectionsVideos listSection={listSections} />
        </Container>      
        </>
        
        )
}

export default CoursePage