import { Container } from "react-bootstrap"
import { Layout } from "../Layout"
import { Comments } from "../DetailsCourse/Comments"
import { useParams } from "react-router-dom"


export const DetailsCoursePage=()=>{
    const {nameCourse}=useParams()
    return (
        <>
            <Layout/>
            <Container>
                <Comments nombre={nameCourse}/>
            </Container>
        </>
    )
}