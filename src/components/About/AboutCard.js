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
            As a dedicated and results-driven data scientist, I leverage a robust combination of statistical knowledge, programming skills, and a passion for extracting actionable insights from complex datasets. With a 3 years of experience in the field, I have a proven track record of successfully designing and implementing data-driven solutions that drive business impact.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Programming Languages: Proficient in Python, with experience in C, R and FullStack Javascript.
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Statistical Analysis: Strong foundation in statistical methods, hypothesis testing, and regression analysis.
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning: Expertise in developing and deploying machine learning models for classification, regression, and clustering.
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Cleaning and Preprocessing: Skilled in handling and cleaning diverse datasets, managing missing data, and ensuring data quality.
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Visualization: Proficient in creating clear and compelling visualizations using tools like Matplotlib, Seaborn, Pandas.
            </li>
            <li className="about-activity">
              <ImPointRight /> Big Data Technologies: Familiar with tools such as Apache Spark for efficient processing of large-scale datasets.
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud Services: Experienced in utilizing AWS, Google Cloud, Azure for scalable and efficient data processin
            </li>
            <li className="about-activity">
              <ImPointRight /> Domain Knowledge: Army, healthcare, finance, e-commerce.
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
