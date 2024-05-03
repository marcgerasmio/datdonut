import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function Reviews() {
    return (
        <>
            <NavBar />
            <Container className="w-100 mt-4 mb-5">
                <hr className="hr" />
                <Container className="d-flex justify-content-center">
                    <h1 className="title-text">
                        WHAT OUR CUSTOMERS HAVE TO SAY
                    </h1>
                </Container>
                <hr className="hr" />
            </Container>
            <Container className="mb-5">
                <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    <Col>
                        <Card className="m-3 rounded card-register card-pink p-4 h-100">
                            <Card.Body>
                                <Card.Text className="text-white fw-bold">
                                    "I love this donut shop and
                                    always have a good experience
                                    when I come here (usually on a Sunday morning)." <br />
                                    - Maiku
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-3 rounded card-register card-black p-4 h-100">
                            <Card.Body>
                                <Card.Text className="text-white fw-bold">
                                    "Just discovered Dat Donut and
                                    already obsessed!!" <br />
                                    - Jaxson
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-3 rounded card-register card-pink p-4 h-100">
                            <Card.Body>
                                <Card.Text className="text-white fw-bold">
                                    "Love how the donuts melt in my mouth.
                                    The donuts here are amazingly yummy.
                                    I even ordered some for a meeting at work 
                                    and individuals that are not sweet
                                    eaters loved them and asked me to bring 
                                    more to our weekly meetings." <br />
                                    - Kiya
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-3 rounded card-register card-black p-4 h-100">
                            <Card.Body>
                                <Card.Text className="text-white fw-bold">
                                    "I expected very little from 
                                    this donut shop...But I was 
                                    sorely mistaken! Their donuts 
                                    are delicious." <br />
                                    - Kyoka
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-3 rounded card-register card-pink p-4 h-100">
                            <Card.Body>
                                <Card.Text className="text-white fw-bold">
                                    "I love this donut shop and
                                    always have a good experience
                                    when I come here (usually on a Sunday morning)." <br />
                                    - Evan
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-3 rounded card-register card-black p-4 h-100">
                            <Card.Body>
                                <Card.Text className="text-white fw-bold">
                                    "I expected very little from 
                                    this donut shop...But I was 
                                    sorely mistaken! Their donuts 
                                    are delicious." <br />
                                    - Coreen
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Reviews;