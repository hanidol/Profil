import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hani Nasri </span>
            from <span className="purple"> Gafsa, Tunisia.</span>
            <br /> Data Scientist specialized in data mining, data visualization and development of tools based on machine learning and deep learning.
            <br />
            I have two Master's Degrees: Embedded Systems and Data-Science..
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Statistical analysis and modeling & Problem solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Applied mathematics & Predictive
            </li>
            <li className="about-activity">
              <ImPointRight /> Reporting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nasri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
