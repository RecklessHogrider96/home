import React from 'react';
import Row from "react-bootstrap/Row";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';

// The section used to wrap a container inside another container, which made it narrower than the rest of the page.
const Experience = ({ experience }) => {
  return (
    <Jumbotron id="experience" className="m-0" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 className="display-4 mb-5 text-center">{experience.heading}</h2>
      <Row className="g-4">
        {experience.data.map((data, index) => (
          <ExperienceCard key={index} data={data} />
        ))}
      </Row>
    </Jumbotron>
  );
}

export default Experience;
