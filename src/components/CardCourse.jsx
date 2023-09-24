import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Information from './DetalleCourse';
import { Link } from "react-router-dom";

function CardCourse( {listCourse }) {
  
 /*const [hoverStates, setHoverStates] = useState(Array(listCourse).fill(false));

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };*/

  return (
    <>
    
      {listCourse.map((curso, index) => (
        <Card style={{ width: '23rem' }} key={index}>
          <Card.Img
            variant="top"
            src={curso.portada}
           
          />
          <Card.Body>
            <Card.Text className='fw-7 fs-22'>
              {curso.titulo}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted fs-15">{curso.autor}</Card.Subtitle>
            <Link to={`/course/${curso.nombre}`}>Ver Curso</Link>
          </Card.Body>
          
        </Card>
      ))}
    </>
  );
}

export default CardCourse;