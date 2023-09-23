
import CardCourse from "./CardCourse";
import CarouselHome from "./CarouselHome"
import Container from 'react-bootstrap/Container';
import { useAuth } from "../context/authContext"
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import CoursePage from "./CoursePage";


const Home=()=>{

const {user, logout}=useAuth()
console.log(user);

    return(
        <>
        <Layout/>
        <Container>
            <h1>{`BIENVENIDO`}</h1>
            <button type="button" className="btnCerrarSesion" onClick={logout }>Cerrar Sesion</button>

            <CarouselHome/>
            <h1 className="mt-5 text fw-5 ">Cursos Disponibles</h1>
            <Routes>
                    <Route index element={<CardCourse/>}/>
                    {/**:productId=>con esto React sabe que va a llegar algo dinamico */}
                    <Route path=":nameCourse" element={<CoursePage/>}/>
                
                
            </Routes>
        </Container>   
        </>
             
    )
}

export default Home