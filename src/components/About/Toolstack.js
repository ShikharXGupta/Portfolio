import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { Icon } from '@iconify/react';
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="devicon:tensorflow-wordmark" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="devicon:numpy-wordmark" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="logos:pandas" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
