import CardCourse from "./CardCourse";
import CarouselHome from "./CarouselHome"
import Container from 'react-bootstrap/Container';

const Home=()=>{
    return(
        <Container>
            <CarouselHome/>
            <h1 className="mt-5 text fw-5 ">Cursos Disponibles</h1>
            <CardCourse/>
        </Container>        
    )
}

export default Home