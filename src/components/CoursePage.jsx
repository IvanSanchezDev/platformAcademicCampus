import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import SectionsVideos from "./SectionsVideos/SectionsVideos";
import { useState, useEffect } from "react";


const CoursePage=()=>{
    const [listSections, setSections]=useState([])

    useEffect(()=>{
        (async()=>{
            try {
                
                const response=await fetch("../../react.json");
                const result=await response.json();
                
                setSections(result)
                
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])


    return(
        <>
        <Layout/>
        <Container>
            <video src=""></video>
        </Container>
        <Container>
            <SectionsVideos listSection={listSections}/>
        </Container>      
        </>
        
        )
}

export default CoursePage