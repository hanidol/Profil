import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
} from "react-icons/si";
import {TbMathFunctionY} from "react-icons/tb"
import {FcLinux} from "react-icons/fc"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="file-icons:matlab" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon="line-md:cloud-print-outline-loop" />
       </Col>
       <Col xs={4} md={2} className="tech-icons">
       <Icon icon="carbon:machine-learning-model" />
       </Col>
       <Col xs={4} md={2} className="tech-icons">
       <Icon icon="arcticons:math-wiki" />
       </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbMathFunctionY />
      </Col>
    </Row>
  );
}

export default Toolstack;
