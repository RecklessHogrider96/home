import React from 'react';
import Row from "react-bootstrap/Row";
import EducationCard from "./EducationCard";
import { Jumbotron } from './migration';

const Education = ({ education }) => {
  return (
    <Jumbotron id="education" className="m-0" style={{ backgroundColor: "white" }}>
      <h2 className="display-4 mb-5 text-center">{education.heading}</h2>
      <Row className="g-4 justify-content-center">
        {education.data.map((data, index) => (
          <EducationCard key={index} data={data} />
        ))}
      </Row>
    </Jumbotron>
  );
}

export default Education;
