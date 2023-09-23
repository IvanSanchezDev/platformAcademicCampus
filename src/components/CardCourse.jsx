import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Information from './DetalleCourse';
import { Link } from "react-router-dom";

function CardCourse({ listCourse }) {
  const [hoverStates, setHoverStates] = useState(Array(listCourse.length).fill(false));

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <>
      {Object.keys(listCourse).map((c, index) => (
        <Card style={{ width: '23rem' }} key={index}>
          <Card.Img
            variant="top"
            src={listCourse[c].portada}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
          <Card.Body>
            <Card.Text className='fw-7 fs-22'>
              {listCourse[c].titulo}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted fs-15">{listCourse[c].autor}</Card.Subtitle>
            <Link to={`/course/${c}`}>Ver Curso</Link>
          </Card.Body>
          {/* {hoverStates[index] && <Information />} */}
        </Card>
      ))}
    </>
  );
}

export default CardCourse;