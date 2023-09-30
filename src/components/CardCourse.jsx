
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styled from "styled-components"


function CardCourse( {listCourse }) {
  


  return (
    <CardWrapper>   
      {listCourse.map((curso, index) => (
        <Card style={{ width: '40rem', background: 'transparent', border:'none' }} key={index}>
          <Card.Img
            variant="top"
            src={curso.portada}          
          />
          <Card.Body>
            <Card.Text className='fw-7 fs-20 titulo'>
              {curso.titulo}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted fs-15">{curso.autor}</Card.Subtitle>
            <Link to={`/detailsCourse/${curso.nombre}`}>Ver Curso</Link>
          </Card.Body>
          
        </Card>
      ))}
    </CardWrapper>
  );
}

export const CardWrapper=styled.div`

margin-top:5rem;
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:5.2rem;



    
      .titulo{
        color:#212121;
      }

      .titulo:hover{
        color:#481593;
      }

  
`;

export default CardCourse;