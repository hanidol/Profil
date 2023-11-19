import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Bio from "./bio"
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are Data-Science &nbsp;
              <i>
                <b className="purple">As a dedicated and results-driven data scientist, I leverage a robust combination of statistical knowledge, programming skills, and a passion for extracting actionable insights from complex datasets. With a [number of years] years of experience in the field, I have a proven track record of successfully designing and implementing data-driven solutions that drive business impact </b> and
                also My skills {" "}
                <b className="purple">
                <div className="home-about-social">
                  <Bio></Bio></div>
               
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js, Data Science, Material UI, Nivo Charts, Formik, Yup, FullCalendar, Data Grid </b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hanidol"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/heni.nasri.338"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookSquare />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hani-nasri-740429168"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
