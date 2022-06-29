import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown"
import { useNavigate } from "react-router-dom";



function NavMenu1() {
  
  const nav = useNavigate();
  const Munna = localStorage.getItem("name")

  const logOut = () => {
    nav("/");
    localStorage.clear();
  };
  useEffect(()=>{
    nav('/')
  })


  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-primary">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-decoration-none text-primary">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-decoration-none text-primary">

                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/image" className="text-decoration-none text-primary">

                Image-search
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup" className="text-decoration-none text-primary">
                SignUp
            
              </Link>
            </Nav.Link>
        



            <Nav.Link>
              {!Munna ? (
                <Link to="/login">login</Link>
              ) : (
                <NavDropdown
                  title={!Munna ? "Signin" : Munna}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav.Link>





          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu1;


