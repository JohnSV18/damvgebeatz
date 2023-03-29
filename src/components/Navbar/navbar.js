import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import speaker from '../../assets/img/music.png'
import './Navbar.css';

function MainNavbar() {

  return (
    <>
      <Navbar>
        <Container className='navbar-container'>
          <Navbar.Brand className='navbar-logo' href="/">
            <img
              alt=""
              src={speaker}
              width="50"
              height="50"
              className="d-inline-block align-left m-2"
            />
            <h2 className='logo-name'> DAMVGE </h2>
          </Navbar.Brand>
          <Nav className='whatt'>
            <Nav.Link className='nav-links' href="/">Home</Nav.Link>
            <Nav.Link className='nav-links' href="https://www.beatstars.com/damvgebeatz">My Beats</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;