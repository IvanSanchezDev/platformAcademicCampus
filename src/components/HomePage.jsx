
import CardCourse from "./CardCourse";
import CarouselHome from "./CarouselHome"
import Container from 'react-bootstrap/Container';
import { useAuth } from "../context/authContext"
import { Layout } from "./Layout";
import { useEffect, useState } from "react";




const Home = () => {
    const {user}=useAuth()
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
      <>
        <Layout />
        <Container>
          <CarouselHome />
          { user && user.data ? (
  <h2 className="mt-5 fw-7 fs-26">Empecemos a aprender {user.data.nombre_usuario} </h2>
) : (
  <h2 className="mt-5 fw-7 fs-26">Cursos Disponibles</h2>
)}
          <Container className="d-flex flex-wrap cardd mt-5">
            {isLoading ? (
              <div>Cargando...</div> // Mostrar un indicador de carga
            ) : (
              <CardCourse listCourse={listCourses} />
            )}
          </Container>
        </Container>
      </>
    );
  };
  
  export default Home;
  