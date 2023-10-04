
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styled from "styled-components"


function CardCourse( {listCourse }) {
  


  return (
    <CardWrapper>   
      {listCourse.map((curso, index) => (
        <Card style={{ width: '40rem', background: 'transparent', border:'none', padding:'0 40px' }} key={index}>
           <Link to={`/detailsCourse/${curso.folder}`}> <Card.Img
            variant="top"
            src={curso.imagenCourse}
            style={{  marginLeft:'38px'}}           
          /></Link>
         
          <Card.Body>
            <Card.Text className='fw-7 fs-20 titulo'>
              {curso.nameCourse}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted fs-15">{curso.autor}</Card.Subtitle>
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

      @media (max-width: 767px) { 

        


        .titulo{
          font-size:16px;
        }
      }

  
`;

export default CardCourse;