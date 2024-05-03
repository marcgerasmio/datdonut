import React from "react";
import { Container, Card, Carousel, Image, Col } from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function Home() {
    return (
        <>
            <NavBar />
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-md-flex flex-md-row flex-column">
                <Card className="w-md-50 me-md-5 p-4 text-card mb-md-0 mb-3">
                    <Card.Body>
                        <Card.Text>
                            <div className="d-flex justify-content-center mb-2 title-text">
                                <h1 className="fw-bold text">WE ALSO SERVE</h1>
                            </div>
                            <h4 className="text">
                                - &nbsp;Breakfast
                                <br />
                                - &nbsp;Sandwiches
                                <br />
                                - &nbsp;Fruit Smoothies
                                <br />
                                - &nbsp;Coffee & Tea
                                <br />
                                - &nbsp;Milk & Juice
                            </h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Carousel className="w-100 w-75">
                    <Carousel.Item>
                        <img className="d-block w-100" src="pic-home.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="pic-home.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="pic-home.png" alt="" />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="mt-5 d-flex justify-content-center">
                <h1>AS SEEN IN</h1>
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-evenly flex-wrap align-items-center mb-5">
                <Col className="mb-3">
                    <Image src="abc-7.png" alt="" fluid />
                </Col>
                <Col className="mb-3">
                    <Image src="1280px-WGN_9_logo_svg.png" alt="" fluid />
                </Col>
                <Col className="mb-3">
                    <Image src="Chicago-Tribune-Logo-200px-no-margins_pn.png" alt="" fluid />
                </Col>
                <Col className="mb-3">
                    <Image src="eaterchicago.png" alt="" fluid />
                </Col>
            </Container>
            <Footer />
        </>
    );
}

export default Home;