
import Accordion from 'react-bootstrap/Accordion';
import {RenderTituloVideo} from './renderTituloVideo'

export const renderTituloSection = (section, sectionIndex) => {

    return (
      <Accordion.Item key={sectionIndex} eventKey={sectionIndex.toString()}>
        <Accordion.Header>
          <h2 className="fw-6 fs-15">{section.sectionName}</h2>
        </Accordion.Header>
        <Accordion.Body className="bodyy">{RenderTituloVideo(section.videos, sectionIndex)}</Accordion.Body>
      </Accordion.Item>
    );
  };