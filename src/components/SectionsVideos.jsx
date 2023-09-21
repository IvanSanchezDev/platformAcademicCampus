import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'


const SectionsVideos=()=>{
    return (

        <AccordionWrapper>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header ><h2 className='fw-7'>Seccion 1</h2></Accordion.Header>
                <Accordion.Body className='bodyy'>
                <div className="videos">
                    <ul className="d-flex flex-start items" >
                        <li className='mt-2'><Form.Check aria-label="option 1" /></li>                   
                        <li className='fs-15'>Fundamentos</li>
                    </ul>
                </div>
                <div className='videos'>
                <ul className="d-flex">
                        <li><Form.Check aria-label="option 1" /></li>                   
                        <li>Fundamentos</li>
                    </ul>
                </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

        </AccordionWrapper>
        
      );
}

const AccordionWrapper=styled.div`

.bodyy {
    margin: 0;
    padding: 0;
  }

.videos {
    height: 5rem;
    display: flex;
    align-items: center;
    /* Estilo para el primer <li> dentro de .videos */
    & ul li:first-child {
      margin-right: 10px;
    }
  }

  .videos:hover {
    background-color: red;
  }

`;

export default SectionsVideos