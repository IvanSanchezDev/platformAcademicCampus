
import CardCourse from "./CardCourse";
import CarouselHome from "./CarouselHome"
import Container from 'react-bootstrap/Container';
import { useAuth } from "../context/authContext"
import { Layout } from "./Layout";


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
            <CardCourse/>
        </Container>   
        </>
             
    )
}

export default Home