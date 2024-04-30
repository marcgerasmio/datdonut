import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import {
    Card, Container,
    Button
} from "react-bootstrap";
import "../App.css";

function Menu() {
    return(
        <>
            <NavBar />
            <div className="bg-home"></div>
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-evenly mt-5 mb-5">
                <Card className="me-5 menu-card">
                    <Card.Img src="pic-home.png" alt="" />
                    <Card.Body className="d-flex justify-content-center">
                        <Button variant="danger" className="w-25 rounded-pill fw-bold">Food</Button>
                    </Card.Body>
                </Card>
                <Card className="menu-card">
                    <Card.Img src="pic-home.png" alt="" />
                    <Card.Body className="d-flex justify-content-center">
                        <Button variant="danger" className="w-25 rounded-pill fw-bold">Beverages</Button>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Footer />
        </>
    );
}

export default Menu;