import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import SectionsVideos from "./SectionsVideos";


const CoursePage=()=>{
    return(
        <>
        <Layout/>
        <Container>
            <video src=""></video>
        </Container>
        <Container>
            <SectionsVideos/>
        </Container>      
        </>
        
        )
}

export default CoursePage