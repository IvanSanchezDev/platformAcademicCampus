import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Information from './Information';
import { Link } from "react-router-dom";

function CardCourse() {

  const [hover, setHover]=useState(false)

  const handleMouseEnter = () => {
    
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

 

  return (



      <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src="src/images/img_reactjs.jpg" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}/>
        <Card.Body>
          <Card.Text className='fw-7 fs-22'>
            Curso completo de Reactjs: De cero a avanzado.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted fs-15">Fernando Herrera</Card.Subtitle>
          <Link to={`/course/react`}>Ver Curso</Link>
        </Card.Body>
        {hover && <Information/>}
        
      </Card>
  
    
    
  )
}


export default CardCourse;