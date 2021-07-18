import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              window.open(this.props.link, "_blank");
            }}
          >
            Github Repo
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Project;
