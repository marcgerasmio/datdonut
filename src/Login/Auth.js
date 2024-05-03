import { 
    Image, Card,
    Row, Col,
    Button, Form,
    FloatingLabel,
    InputGroup, Container,
    Navbar
} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "../App.css";
import { useState} from "react";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const login = async () => {
        const response = await fetch('http://datdonut.test/api/login', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    
        const data = await response.json();
    
        sessionStorage.setItem('username', data.user.username);
        sessionStorage.setItem('user_id', data.user.id);

        navigate("/home");
        
      };
    return(
        <>
            <Navbar className="navbar"></Navbar>
            <Container className='mt-5'>
                <Row>
                    <Col className="d-none d-md-block">
                        <Image 
                            src='Dat-Donut-Logo-2.png' 
                            height={500}
                            width={500}
                            fluid 
                        />
                    </Col>
                    <Col>
                        <Card className={`mt-5 p-md-4 card-login`}>
                            <Card.Body>
                                <Form id="loginForm" noValidate>
                                    <InputGroup className="mb-3 mt-3">
                                        <InputGroup.Text>
                                            <FaUserAlt />
                                        </InputGroup.Text>
                                        <FloatingLabel controlId="floatingInput" label="Username">
                                            <Form.Control
                                                size="lg"
                                                type="text"
                                                placeholder="name@example.com"
                                                required
                                                value={username} onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </FloatingLabel>
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text>
                                            <RiLockPasswordFill />
                                        </InputGroup.Text>
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control
                                                size="lg"
                                                type="password"
                                                placeholder="Password"
                                                required
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </FloatingLabel>
                                    </InputGroup>
                                    <div className="d-flex justify-content-center">
                                        <Button 
                                            variant='danger'
                                            className="login-button w-50 p-3 mb-3 fw-bold"
                                            onClick={login}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                                <div className="d-flex justify-content-center mt-3">
                                    <p>Don't have an account?&nbsp;</p>
                                    <Link to='/register'>Sign up</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
                    <p className="mt-3 mt-md-5 mb-0 fs-6 fs-md-5 text-muted text-center text-md-start">
                        ©Dat Donut Enterprises Inc. &nbsp;• &nbsp;
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-around mt-3 mt-md-5">
                        <div><FaFacebook size={24} />&nbsp;&nbsp;</div>
                        <div><FaTwitter size={24} />&nbsp;&nbsp;</div>
                        <div><FaInstagramSquare size={24} />&nbsp;&nbsp;</div>
                    </div>
                </div>

            </Container>
        </>
    );
}

export default Login;