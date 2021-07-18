import React, { Component } from "react";
import Navigation from "./Navigation";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>This is a title</h1>
        <Navigation />
      </>
    );
  }
}

export default Header;
