import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import ContactMe from "./ContactMe";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
    };
  }
  render() {
    let body = <></>;
    let name = "Home";
    if (this.state.page === "aboutme") {
      body = <AboutMe></AboutMe>;
      name = "About Me";
    } else if (this.state.page === "portfolio") {
      body = <Portfolio />;
      name = "Portfolio";
    } else if (this.state.page === "resume") {
      body = <Resume></Resume>;
      name = "Resume";
    } else if (this.state.page === "contactme") {
      body = <ContactMe />;
      name = "Contact Me";
    }
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Marc</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  // When the "home" button is clicked, set the state variable 'page' to the string "home"
                  onClick={() => {
                    this.setState({ page: "home" });
                  }}
                  href="#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link href="#link">Links</Nav.Link>
                <NavDropdown title={name} id="basic-nav-dropdown">
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={() => {
                      this.setState({ page: "aboutme" });
                    }}
                  >
                    About Me
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    onClick={() => {
                      this.setState({ page: "portfolio" });
                    }}
                  >
                    Portfolio
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    onClick={() => {
                      this.setState({ page: "contactme" });
                    }}
                  >
                    Contact Me
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.4"
                    onClick={() => {
                      this.setState({ page: "resume" });
                    }}
                  >
                    Resume
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {body}
      </>
    );
  }
}

export default Navigation;

// titles About Me, Portfolio, Contact, and Resume
