import React from "react";
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png'




const Navbarc = ({Navbarc}) => {
    return (
        <>
        
        <Navbar  bg="light">
          <Container>
          <div>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Juegos.com
            </Navbar.Brand>

            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Capitulos</Nav.Link>
            <Nav.Link href="#pricing">Personas</Nav.Link>
            <Nav.Link href="#pricing">Planetas</Nav.Link>
          </Nav>
          </div>
          <div>
          <Nav className="me-auto">
          <Nav.Link href="">Iniciar Sesion</Nav.Link>
          </Nav>
          </div>



          </Container>
        </Navbar>
      </>
    )
  }
  
  export default Navbarc
  