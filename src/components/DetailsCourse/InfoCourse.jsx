import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@mui/material/Rating';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useInscripcion } from '../../context/inscripcionContext';
import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';

const InfoCourse=({nombreCourse, portadaCourse, comentarios})=>{
  const {user}=useAuth()
  const {inscripcionCurso, verificarInscripcion, message, isEnrolled}=useInscripcion()
  const location = useLocation();

  const handleInscripcion=()=>{    
    inscripcionCurso(user.nombre_usuario, nombreCourse)
}

useEffect(() => {
  verificarInscripcion(user.nombre_usuario, nombreCourse);
}, []);




    return(
        <Row className="pt-5 ">
                <Col>
                <div className="mb-5">
                  <h2 className="fs-40">Curso {nombreCourse}</h2>
                </div>
                <div>
                  <p className="fs-21 fw-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat dignissimos aspernatur, impedit aperiam corrupti, molestias odit numquam sed necessitatibus, veniam odio maiores quidem saepe dolores? Beatae laudantium nostrum consequatur!</p>
                </div>
                <div className="d-flex rating mt-5">
                  <Rating name="half-rating-read" className="mt-2 custom-rating" defaultValue={3.5} precision={0.5} readOnly />
                  <Link className="custom-button" to={`opiniones`} state={{ nombre:nombreCourse, portada:portadaCourse, comentarios }}>
                    {!location.state && `Ver Opiniones (5)` }
                    </Link>
                </div>
                <div className='buttons mt-5'>
                {!location.state ? (
                    !isEnrolled ? (<Button className="btnInscribirse fs-35" onClick={handleInscripcion}>Inscribirse</Button>) : <Link to={`/course/${nombreCourse}`}><Button className="btnInscribirse fs-35">Ir al curso</Button></Link>
                  
                ) : (
                  <Link to={`/detailsCourse/${nombreCourse}`}><button className="btnVolver fs-35">Volver</button></Link>
                  
                )}
                </div>
                </Col>
                <Col className="secondColumn" >
                  <div className="imagen mr-5">
                    <img src={portadaCourse} alt="" />
                  </div>
                </Col>
              </Row>
        )
}

export default InfoCourse