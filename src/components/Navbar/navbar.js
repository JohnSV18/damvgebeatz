import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import speaker from '../../assets/img/music.png'
import './Navbar.css';
function MainNavbar() {

  return (
    <>
      <Navbar className='navbar' sticky='top'>
        <Container className='navbar-container'>
          <Navbar.Brand className='navbar-logo' href="/">
            <img
              alt=""
              src={speaker}
              width="60"
              height="60"
              className="d-inline-block align-left"
            />
            DAMVGEBEATZ
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link className='nav-links' href="/">Home</Nav.Link>
            <Nav.Link className='nav-links' href="https://www.beatstars.com/damvgebeatz">Music</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;