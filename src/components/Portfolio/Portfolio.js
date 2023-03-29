import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Portfolio.css'

function Portfolio () {
    return (
        <div className='youtubeVideos'>
            <Container>
                <div className='containerss'>
                <Row>
                    <Col>
                        <div className='justify-content-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/gQJ6H5Pb7Og?start=3" title="YouTube video player" 
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" allowfullscreen>
                            </iframe>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/xluWCztKaQw?start=30" title="YouTube video player" 
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
};

export default Portfolio;