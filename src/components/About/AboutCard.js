import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ELI O.WANGILA </span>
            from <span className="purple"> Nairobi, Kenya</span>
            <br />I am a junior developer pursuing web development at Moringa School
            <br />
            <br />
            Apart from coding, I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Eli Wangila</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
