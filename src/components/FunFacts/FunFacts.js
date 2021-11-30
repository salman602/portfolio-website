import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClock, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'

const FunFacts = () => {
    return (
        <div className="py-5">
            <Container>
                <h2 className="mb-4">Fun Facts</h2>
                <Row xs={1} sm={2} md={4} className="g-4 text-center">
                    <Col>
                        <Card className="border p-3 shadow">
                            <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#FEA770', fontSize: '2rem' }} />
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Happy Clients</Card.Subtitle>
                                <h1 className="lead fs-1">234</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border p-3 shadow">
                            <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faClock} style={{ color: '#FEA770', fontSize: '2rem' }} />
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Working Hours</Card.Subtitle>
                                <h1 className="lead fs-1">5654</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border p-3 shadow">
                            <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faStar} style={{ color: '#FEA770', fontSize: '2rem' }} />
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Awards won</Card.Subtitle>
                                <h1 className="lead fs-1">9</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border p-3 shadow">
                            <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faCoffee} style={{ color: '#FEA770', fontSize: '2rem' }} />
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Coffee Consumed</Card.Subtitle>
                                <h1 className="lead fs-1">1234</h1>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default FunFacts;