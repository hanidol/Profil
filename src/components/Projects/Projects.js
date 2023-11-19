import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import science from "../../Assets/Projects/science.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Doctors"
              description="Doctor Chat Room or Workspace to share resources and hangout with fellow doctors build with react.js, Node js and MongoDb. Have features which allows user for realtime messaging, works  image sharing as well as supports reactions on messages."
              ghLink="https://github.com/hanidol/APPI"
              demoLink="https://doctor-alzheimer.onrender.com/?fbclid=IwAR3dWTAtfSVbTt5zbyS3vs_kcehH08J7OJP_WYu8IHgxhVlFAEVhLh2b-ik"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Parking"
              description="A Smart parking using ESP32-CAM and Raspberry pi for  Plate-detection with Machine learning algorithm ."
              ghLink="https://github.com/hanidol/Smart_parking"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={science}
              isBlog={false}
              title="Profil Bio"
              description="A application using React , Node.js a personal portfolio website serves as a powerful tool to promote myself, build our brand, and create opportunities in the digital landscape. It allows  to take control of our online presence and showcase our work in the best possible light."
              ghLink="https://github.com/hanidol/Profil"
              demoLink="https://profil-bio.onrender.com/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
