import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import logo from '../images/logothaisquiro.png'

export default function Header() {
  return (
    <Navbar bg="white" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
      <img src={logo} class="img-fluid logo" alt="Logo Thaís Quiropraxia"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='purple' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Thaís Clemente</Nav.Link>
          <NavDropdown title="Quiropraxia" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              O que é
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Complexo de subluxação vertebral
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Tratamento
            </NavDropdown.Item>            
          </NavDropdown>
          <Nav.Link href="#link">Atendimento</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
