import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'

function Home () {
    return (
        <div>
            <div className='hero-container'>
                <Row>
                    <Col>
                        <div className='justify-content-center'>
                            <h1 className='mainHeader p-5'>I AM DAMVGE</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='miniIntro p-5 justify-content-center'>
                            <div>
                                <iframe className="blazeplayer" title="beatstarsplayer" src="https://player.beatstars.com/?storeId=137175" width="100%" height="800" > </iframe>
                                {/* <img src={blazePlayer} alt="Blaze Player Sample" width="700" height="500"></img> */}
                            </div>
                            <div className='beatstarsSocial'>
                                <h2>Follow me on Beatstars</h2>
                                <Button 
                                    className=' m-3' 
                                    href="https://www.beatstars.com/damvgebeatz"
                                    variant="outline-light" >
                                    BEATSTARS X DAMVGE
                                </Button>
                            </div>
                        </div>
                    </Col>
                    {/* <Col>
                    <div className='miniIntro p-5 justify-content-center'>
                        <h1 className='mainHeader p-3'>CHECK OUT MY YOUTUBE</h1>
                        <div>
                            <Button className=' m-3' href="https://www.beatstars.com/damvgebeatz" >
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
                    </Col> */}
                </Row>
            </div>
        </div>
    )
};

export default Home;