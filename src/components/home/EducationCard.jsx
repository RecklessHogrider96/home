import React from 'react';
import Col from "react-bootstrap/Col";

const EducationCard = ({ data }) => {
  return (
    <Col md={6}>
      <div className="timeline-card h-100 text-center">
        <div className="logo-box">
          <img src={data.companylogo} alt={`${data.role} logo`} loading="lazy" />
        </div>
        <p className="fw-semibold mb-1">{data.role}</p>
        <p className="text-muted mb-0">{data.date}</p>
      </div>
    </Col>
  );
}

export default EducationCard;
