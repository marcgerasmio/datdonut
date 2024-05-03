import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import {
    Card, Container,
    Button, Row, Col
} from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();

    const redirectfoods = ()=>{
        navigate("/food");
    }

    const redirectbeverage = ()=>{
        navigate("/beverage");
    }
    return(
        <>
            <NavBar />
            <Container className="w-50">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-center">
                <h1 className="title-text">MENU</h1>
            </Container>
            <Container className="w-50 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-center mt-5 mb-5">
                <Row xs={1} sm={2} md={2} className="g-4">
                    <Col>
                        <Card className="menu-card">
                            <Card.Img variant="top" src="pic-home.png" alt="" />
                            <Card.Body className="d-flex justify-content-center">
                                <Button 
                                    onClick={redirectfoods}
                                    variant="danger" 
                                    className="w-75 rounded-pill fw-bold login-button text-white"
                                >
                                    Food
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="menu-card">
                            <Card.Img variant="top" src="beverage-menu.jpg" alt="" height={275} />
                            <Card.Body className="d-flex justify-content-center">
                                <Button 
                                    onClick={redirectbeverage}
                                    variant="login-button" 
                                    className="w-75 rounded-pill fw-bold login-button text-white"
                                >
                                    Beverages
                                </Button>
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

export default Menu;