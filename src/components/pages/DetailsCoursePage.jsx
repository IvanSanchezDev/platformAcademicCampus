import { Container } from "react-bootstrap"
import { Layout } from "../Layout"
import { Comments } from "../DetailsCourse/Comments"
import { useParams } from "react-router-dom"
import DetalleCourse from "../DetailsCourse/DetalleCourse"


export const DetailsCoursePage=()=>{
    const {nameCourse}=useParams()
    return (
        <>
            <Layout/>
            
                <DetalleCourse nombreCurso={nameCourse}/>
                
            
        </>
    )
}