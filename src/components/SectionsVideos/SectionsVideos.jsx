
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components'
import { renderTituloSection } from './renderTituloSections';


const SectionsVideos=({listSection})=>{
    
      return (
        <AccordionWrapper>
          <Accordion defaultActiveKey="0">
            {Object.values(listSection).map((section, sectionIndex) =>
              renderTituloSection(section, sectionIndex)
            )}
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
    background-color: gray;
    color:white;
  }

`;

export default SectionsVideos