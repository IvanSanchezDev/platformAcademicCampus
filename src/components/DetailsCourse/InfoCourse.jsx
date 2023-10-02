import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@mui/material/Rating';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useInscripcion } from '../../context/inscripcionContext';
import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';

const InfoCourse=({nombreCourse, portadaCourse, comentarios, titulo, duracion})=>{
  const {user}=useAuth()
  const {inscripcionCurso, verificarInscripcion, message, isEnrolled}=useInscripcion()
  const location = useLocation();

  const handleInscripcion=()=>{    
    inscripcionCurso(user.nombre_usuario, nombreCourse)
}

useEffect(() => {
  verificarInscripcion(user.nombre_usuario, nombreCourse);
}, []);



function segundosAHoras(segundos) {
  // 1 minuto = 60 segundos
  // 1 hora = 60 minutos

  const minutos = segundos / 60;
  const horas = minutos / 60;

  // Redondear el resultado a la cantidad más cercana de horas
  return Math.round(horas);
}

const cantidadComentarios = comentarios ? comentarios.length : 0;



    return(
        <Row className="pt-5 ">
                <Col>
                <div className="mb-5">
                  <h2 className="fs-40">Curso {nombreCourse}</h2>
                </div>
                <div>
                  <p className="fs-21 fw-4">{titulo}</p>
                  <p className="fs-21 fw-4">{segundosAHoras(duracion)}</p>
                </div>
                <div className="d-flex rating mt-5">
                  <Rating name="half-rating-read" className="mt-2 custom-rating" defaultValue={3.5} precision={0.5} readOnly />
                  <Link className="custom-button" to={`opiniones`} state={{ titulo:titulo, duracion:duracion,  nombre:nombreCourse, portada:portadaCourse, comentarios:comentarios }}>
                    {!location.state && `Ver Opiniones ${cantidadComentarios}` }
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