
import { Layout } from "../Layout"

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