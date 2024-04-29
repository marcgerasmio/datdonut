import {
    Button, Col,
    Row, FloatingLabel,
    Form, Container,
    Card, Navbar
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../App.css";

function Register() {
    return (
        <>
            <Navbar className="navbar"></Navbar>
            <div className="mt-5 text-center">
                <h1 className="title-text">Fill Out Your Personal Information</h1>
            </div>
            <Container className="mt-4">
                <Card className="p-4 card-register">
                    <Card.Body>
                        <Form>
                            <Row className="mb-4">
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingEmail" label="Email">
                                        <Form.Control type="email" placeholder="Email" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingFirstname" label="Firstname">
                                        <Form.Control type="text" placeholder="Firstname" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingLastname" label="Lastname">
                                        <Form.Control type="text" placeholder="Lastname" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingBirthmonth" label="Birthmonth">
                                        <Form.Control type="text" placeholder="Birthmonth" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={6} md={4}>
                                    <FloatingLabel controlId="floatingDay" label="Day">
                                        <Form.Control type="text" placeholder="Day" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={6} md={4}>
                                    <FloatingLabel controlId="floatingYear" label="Year">
                                        <Form.Control type="text" placeholder="Year" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingAddress" label="Address">
                                        <Form.Control type="text" placeholder="Address" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingCity" label="City">
                                        <Form.Control type="text" placeholder="City" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingProvince" label="Province">
                                        <Form.Control type="text" placeholder="Province" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingZipcode" label="Zip Code">
                                        <Form.Control type="text" placeholder="Zip Code" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingEmail" label="Email">
                                        <Form.Control type="text" placeholder="Email" />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingPhone" label="Phone Number">
                                        <Form.Control type="text" placeholder="Phone Number" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center mt-4">
                                <Button variant="danger" className="login-button w-50 p-3 fw-bold ">
                                    Register
                                </Button>
                            </div>
                        </Form>
                        <div className="d-flex justify-content-center mt-3">
                            <p>Already have an account?&nbsp;</p>
                            <Link to='/'>Login</Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Register;
