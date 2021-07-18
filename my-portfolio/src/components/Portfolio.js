import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Project from "./Project";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col>
          <Project
            title="Project #1"
            description="this is the first project"
            link="https://www.google.com"
            image="https://www.kindpng.com/picc/m/105-1059638_convert-to-base64-real-puppy-real-cute-animal.png"
          />
        </Col>
        <Col>
          <Project
            title="Project #2"
            description="this is the second project"
            link="https://www.google.com"
            image="https://www.kindpng.com/picc/m/105-1059638_convert-to-base64-real-puppy-real-cute-animal.png"
          />
        </Col>
        <Col>
          <Project
            title="Project #3"
            description="this is the third project"
            link="https://www.google.com"
            image="https://www.kindpng.com/picc/m/105-1059638_convert-to-base64-real-puppy-real-cute-animal.png"
          />
        </Col>
      </Row>
    );
  }
}

export default Portfolio;
