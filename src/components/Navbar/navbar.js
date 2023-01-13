import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import navIcon1 from '../../assets/img/music.svg'
import navIcon2 from '../../assets/img/youtube.svg'
import navIcon3 from '../../assets/img/instagram.svg'
import './navbar.css'

function MainNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
      <Container>
        <Navbar.Brand href="#home">DAMVGEBEATZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="https://www.beatstars.com/damvgebeatz" className={activeLink === 'music' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('music')}>Music</Nav.Link>
            <Nav.Link href="#photos" className={activeLink === 'photos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('photos')}>Photos</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.beatstars.com/damvgebeatz'><img src={navIcon1} alt='' /></a>
              <a href='https://www.youtube.com/@damvgebeatz6894'><img src={navIcon2} alt='' /></a>
              <a href='https://www.instagram.com/damvgebeatz/'><img src={navIcon3} alt='' /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;