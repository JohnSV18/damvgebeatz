import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import speaker from '../../assets/img/music.png'
import './Home.css'

function Home () {
    return (
        <div>
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
            <div className='hero-container'>
                <div className='miniIntro p-5 justify-content-center'>
                    <h1 className='mainHeader p-3'>I AM DAMVGEBEATZ</h1>
                    <div className='hero-btns'>
                        <Button className='BuyBeats m-3' href="https://www.beatstars.com/damvgebeatz" >
                            BUY MY BEATS</Button>
                        <Button 
                            className='Beats m-3' 
                            href='https://www.youtube.com/@damvgebeatz6894'
                            variant="outline-light"
                        >
                        Check Out My youtube
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Home;