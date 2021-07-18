import React, { Component } from "react";

import Project from "./Project";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Project
          title="Project #1"
          description="this is the first project"
          link="https://www.google.com"
        />
        <Project
          title="Project #2"
          description="this is the second project"
          link="https://www.google.com"
        />
        <Project
          title="Project #3"
          description="this is the third project"
          link="https://www.google.com"
        />
      </>
    );
  }
}

export default Portfolio;
