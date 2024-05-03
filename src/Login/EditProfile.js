import React, { useState, useEffect } from 'react';
import {
    Button, Col,
    Row, FloatingLabel,
    Form, Container,
    Card, Navbar
} from "react-bootstrap";
import "../App.css";
import { useNavigate } from 'react-router-dom';


function EditProfile() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthmonth, setBirthmonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    const [userData, setUserData] = useState('');
    const userId = sessionStorage.getItem('user_id');

    const validateForm = () => {
        // Basic validation checks for each field
        if (!username || !password || !confirmPassword || !firstname || !lastname || !birthmonth || !day || !year || !address || !city || !province || !zipcode || !email || !phoneNumber) {
            alert("Please fill out all fields.");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }
        return true;
    };
    const fetchUser = async () => {
        try {
            const response = await fetch(`http://datdonut.test/api/getuser/${userId}`);
            const data = await response.json();
            console.log(data);
            setUsername(data[0].username);
            setFirstname(data[0].firstname);
            setLastname(data[0].lastname);
            setBirthmonth(data[0].birthmonth);
            setDay(data[0].day);
            setYear(data[0].year);
            setAddress(data[0].address);
            setCity(data[0].city);
            setProvince(data[0].province);
            setZipcode(data[0].zipcode);
            setEmail(data[0].email);
            setPhoneNumber(data[0].phonenumber);


        } catch (error) {
            console.error("Error fetching Food data:", error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);

    
    const update = async () => {

        if (!validateForm()) return;
        
        try {
          const response = await fetch(`http://datdonut.test/api/updateuser/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname:firstname,
                lastname:lastname,
                birthmonth:birthmonth,
                day:day,
                year:year,
                address:address,
                city:city,
                province:province,
                zipcode:zipcode,
                phonenumber:phoneNumber,
                email:email,
                username:username,
                password:password,

            }),
          });
          const data = response.json();
          console.log(data);
          alert("update profile successful!");
          navigate("/home");
      
        } catch (error) {
          // Handle errors
          alert("Submission failed. Please try again.");
          console.error('Error submitting:', error.message);
        }
    };


    return (
        <>
            <Navbar className="navbar"></Navbar>
            <div className="mt-5 text-center">
                <h1 className="title-text">Edit Profile</h1>
            </div>
            <Container className="mt-4">
                <Card className="p-4 card-register">
                    <Card.Body>
                        <Form>
                            <Row className="mb-4">
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingUserName" label="Username">
                                        <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
                                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingFirstname" label="Firstname">
                                        <Form.Control type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingLastname" label="Lastname">
                                        <Form.Control type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={4}>
                                    <FloatingLabel controlId="floatingBirthmonth" label="Birthmonth">
                                        <Form.Control type="text" placeholder="Birthmonth" value={birthmonth} onChange={(e) => setBirthmonth(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={6} md={4}>
                                    <FloatingLabel controlId="floatingDay" label="Day">
                                        <Form.Control type="text" placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={6} md={4}>
                                    <FloatingLabel controlId="floatingYear" label="Year">
                                        <Form.Control type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingAddress" label="Address">
                                        <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingCity" label="City">
                                        <Form.Control type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingProvince" label="Province">
                                        <Form.Control type="text" placeholder="Province" value={province} onChange={(e) => setProvince(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingZipcode" label="Zip Code">
                                        <Form.Control type="text" placeholder="Zip Code" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingEmail" label="Email">
                                        <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="floatingPhone" label="Phone Number">
                                        <Form.Control type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center mt-4">
                                <Button variant="danger" className="login-button w-50 p-3 fw-bold " onClick={update}>
                                    Save
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default EditProfile;
