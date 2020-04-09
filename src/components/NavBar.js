import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="/products">Warehouse</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/products/preview">Preview</Nav.Link>
                  <Nav.Link href="/products">Products</Nav.Link>

                  <NavDropdown title="Meniu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/products">Table</NavDropdown.Item>
                    <NavDropdown.Item href="/products/preview">
                      Edit
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Router>
        </div>
      </div>
    );
  }
}

export default NavBar;
