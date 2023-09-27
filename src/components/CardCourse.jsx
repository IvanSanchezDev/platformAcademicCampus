import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function CardCourse( {listCourse }) {
  


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
            <Link to={`/detailsCourse/${curso.nombre}`}>Ver Curso</Link>
          </Card.Body>
          
        </Card>
      ))}
    </>
  );
}

export default CardCourse;