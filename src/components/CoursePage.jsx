import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import SectionsVideos from "./SectionsVideos/SectionsVideos";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom"
import { useUrl } from "../context/urlContext";


const CoursePage=()=>{
    const {nameCourse}=useParams();
    const{establecerNombreCourse, url}=useUrl()
    
    const [listSections, setSections]=useState([])

    useEffect(()=>{
        (async()=>{
            try {
                
                const response=await fetch(`../../${nameCourse}.json`);
                const result=await response.json();
                
                setSections(result)
                establecerNombreCourse(nameCourse)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [nameCourse])


    return(
        <>
        <Layout/>
        <Container>
        <video controls>
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