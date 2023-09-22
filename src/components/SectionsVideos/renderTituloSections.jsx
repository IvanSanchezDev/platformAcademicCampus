
import Accordion from 'react-bootstrap/Accordion';
import {renderTituloVideo} from './renderTituloVideo'

export const renderTituloSection = (section, sectionIndex) => {
    return (
      <Accordion.Item key={sectionIndex} eventKey={sectionIndex.toString()}>
        <Accordion.Header>
          <h2 className="fw-7">{section.sectionName}</h2>
        </Accordion.Header>
        <Accordion.Body className="bodyy">{renderTituloVideo(section.videos)}</Accordion.Body>
      </Accordion.Item>
    );
  };