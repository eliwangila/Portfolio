import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import blogapp from "../../Assets/Projects/blogapp.png";
import news from "../../Assets/Projects/news.png";
import gallary from "../../Assets/Projects/gallary.png";
import Delani from "../../Assets/Projects/Delani.png";
import domain from "../../Assets/Projects/domain.png";
import hood from "../../Assets/Projects/hood.png";

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
              imgPath={blogapp}
              isBlog={false}
              title="blogapp"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/eliwangila/Apiconsumingangular"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="news app"
              description="News App is a web appliction that displays a list of news sources from around the world"
              link="https://newsapptest1.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallary}
              isBlog={false}
              title="Gallary"
              description="This is a Django web application that is for displaying my photos taken from different locations and then put into different categories for viewing and searching"
              link="https://photosgallary124.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Delani}
              isBlog={false}
              title="Delani Kitchen"
              description="This is a website for Delani studio it shows what's being offered, portfolio and contact form, for comments and concerns"
              link="https://eliwangila.github.io/IP3delani-studio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={domain}
              isBlog={false}
              title="Modern website"
              description="A modern website that a created using Angular"
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hood}
              isBlog={false}
              title="Neighbourhood"
              description="Neighbourhood project is a web application that allows you to be in the loop about what's happening in your neighbourhood"
              link="https://hoodvillage1.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
