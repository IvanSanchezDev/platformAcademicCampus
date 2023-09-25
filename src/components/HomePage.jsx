
import CardCourse from "./CardCourse";
import CarouselHome from "./CarouselHome"
import Container from 'react-bootstrap/Container';
import { useAuth } from "../context/authContext"
import { Layout } from "./Layout";
import { useEffect, useState } from "react";




const Home=()=>{

    const {user}=useAuth()
   
const [listCourses, setCourses]=useState([]);

    useEffect(()=>{
        (async()=>{
            try {
                const response = await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/curso/traerCursos`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",         
                },
                credentials: 'include'
              });
                const result=await response.json();
                
                setCourses(result.data)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])


    return(
        <>
        <Layout/>
        <Container>
           
            <CarouselHome/>
            <h2 className="mt-5 fw-7 fs-26">{ user ? `Empecemos a aprender ${user.data.nombre_usuario} ` : " Cursos Disponibles "}</h2>
            <Container className="d-flex flex-wrap cardd mt-5">
                <CardCourse listCourse={listCourses}/>
            </Container>           
            
        </Container>   
        </>
             
    )
}

export default Home