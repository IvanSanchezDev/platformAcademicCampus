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
  const {inscripcionCurso, verificarInscripcion, message, isLoading, isEnrolled}=useInscripcion()
  const location = useLocation();

 

  const handleInscripcion=()=>{    
    inscripcionCurso(user.nombre_usuario, nombreCourse)
}

useEffect(() => {
  if (user.nombre_usuario && nombreCourse) {
    verificarInscripcion(user.nombre_usuario, nombreCourse);
  }
  
}, []);



function segundosAHoras(segundos) {
  
  if (isNaN(segundos)) {
    return 0
  }
  
    const minutos = segundos / 60;
  const horas = minutos / 60;

  
  return Math.round(horas);

  }
  
  const cantidadComentarios = comentarios ? comentarios.length : 0;

  
  

  
    return(
        <Row className="pt-5">
                <Col className="secondColumn mt-5 ml-5"  md={{ order: 'last' }}>
                  <div className="imagen" style={{width:'100%', marginLeft:'-5px', padding:'0 10px'}}>
                    <img src={portadaCourse} alt="" className="mx-auto" />
                  </div>
                </Col>
                <Col xs={12} md={6} className='mb-5' style={{marginTop:'25px'}}>
                <div className="mb-5">
                  <h2 className="fs-40">Curso {nombreCourse}</h2>
                </div>
                <div>
                  <p className="fs-21 fw-4">{titulo}</p>
                  <p className="fs-21 fw-4">{segundosAHoras(duracion)}</p>
                </div>
                <div className="d-flex rating mt-5">
                  <Rating name="half-rating-read" className="mt-2 custom-rating" defaultValue={5} readOnly />
                  <Link className="custom-button" to={`opiniones`} state={{ titulo:titulo, duracion:duracion,  nombre:nombreCourse, portada:portadaCourse, comentarios:comentarios }}>
                    {!location.state && `Ver Opiniones ${cantidadComentarios}` }
                    </Link>
                </div>
                <div className='buttons mt-5'>
  {location.state ? (
    <Link to={`/detailsCourse/${nombreCourse}`}>
      <button className="btnVolver fs-35">Volver</button>
    </Link>
  ) : (
    !isLoading && (
      isEnrolled ? (
        <Link to={`/course/${nombreCourse}`}  className="d-grip" state={{ titulo: titulo }} >
          <Button className="btnInscribirse fs-35">Ir al curso</Button>
        </Link>
      ) : (
        <Button className="btnInscribirse fs-35" onClick={handleInscripcion}>
          Inscribirse
        </Button>
      )
    ) 
  )}
</div>
                </Col >
                
              </Row>
        )
}

export default InfoCourse