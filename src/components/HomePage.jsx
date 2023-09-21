
import CardCourse from "./CardCourse";
import CarouselHome from "./CarouselHome"
import Container from 'react-bootstrap/Container';
import { useAuth } from "../context/authContext"


const Home=()=>{

const {user}=useAuth()
console.log(user);

    return(
        <Container>
            <h1>{`BIENVENIDO`}</h1>
            <CarouselHome/>
            <h1 className="mt-5 text fw-5 ">Cursos Disponibles</h1>
            <CardCourse/>
        </Container>        
    )
}

export default Home