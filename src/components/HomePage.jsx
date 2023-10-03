
import CardCourse from "./CardCourse";
import styled from "styled-components"
import Container from 'react-bootstrap/Container';
import { useAuth } from "../context/authContext"
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { RiDivideFill } from "react-icons/ri";




const Home = () => {
   
    const [listCourses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Agregar un estado para el indicador de carga
  
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch(
            `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/curso/traerCursos`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: 'include',
            }
          );
          const result = await response.json();
  
          setCourses(result.data);
          setIsLoading(false); // Marcar la carga como completa
        } catch (error) {
          console.log(error);
          setIsLoading(false); // Marcar la carga como completa en caso de error
        }
      })();
    }, []);
  
    return (
      <HomeWrapper>
        
        <Layout />
        <Container className="flex-center text-center">
          
          <div className="enunciado">
            <h2 className="fs-50 titulo fw-7">Cursos disponibles</h2>
            <div className="fs-35 fw-4 text">¡Despega tu carrera como Developer!</div>
          </div>
             
          <div className="d-flex flex-wrap cardd mt-5">
            {isLoading ? (
              <div>Cargando...</div> // Mostrar un indicador de carga
            ) : (
              <CardCourse listCourse={listCourses} />
            )}
          </div>
        </Container>
      </HomeWrapper>
    );
  };


  export const HomeWrapper=styled.div`
  background-color:#EDEDED;
  height:150vh;


  .enunciado{

    margin-top:10rem;

    div{
    color:#212121;
    
    }

    .titulo{
      color:#481593;
     
    }

  }
  
  `

  
  
  export default Home;
  