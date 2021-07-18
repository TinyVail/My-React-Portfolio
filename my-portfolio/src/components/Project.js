import React, { Component } from "react";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <a target="_blank" rel="noreferrer" href={this.props.link}>
          Github Link
        </a>
      </div>
    );
  }
}

export default Project;
