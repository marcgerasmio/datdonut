import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";
import { Container, Card, Row, Col } from "react-bootstrap";

function About() {
    return (
        <>
            <NavBar />
            <Container className="w-50">
                <hr className="hr" />
            </Container>
            <Container fluid className="d-flex justify-content-center">
                <h1 className="title-text">ABOUT US</h1>
            </Container>
            <Container className="w-50 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-center">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="me-md-5">
                            <Card.Img src="download (3).jpg" alt="" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="w-100 text-card">
                            <Card.Body className="p-4">
                                <Card.Text>
                                    <div className="d-flex justify-content-center mb-2 title-text">
                                        <h1 className="fw-bold text">
                                            DONUTS HAVE BEEN OUR SPECIALITY FOR OVER 25 YEARS
                                        </h1>
                                    </div>
                                    <p className="text-white">
                                        Known for the famous Big DAT,
                                        Dat Donut has been a Chatham neighborhood staple since 1994.
                                        The owners, darryl and andrea, opened their flagship location 
                                        on the corner of 83rd Street and Cottage Grove Avenue.
                                        Donuts were always a childhood favorite and you can sometimes 
                                        spot them on-site delighting in the deep-fried confection.
                                        the team takes pride in a good quality product and friendly service!
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Footer />
        </>
    );
}

export default About;