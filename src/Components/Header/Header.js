import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fs-2 fw-bold">
          <img src="https://i.ibb.co/QYvfpNM/attachment-104180274-removebgww-preview.png" style={{width:'120px'}} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav "
          className="justify-content-end"
        >
          <Nav className="headlinks">
            <Nav.Link as={Link} to="/" >
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/blog" >
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" >
              Contact
            </Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login" >
                Login
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" onClick={logOut}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
