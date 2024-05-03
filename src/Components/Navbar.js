import React, { useState } from "react";
import {
    Navbar, Container,
    Nav, Image,
    Dropdown,
    Offcanvas
} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import "../App.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navigate = useNavigate();

    const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

    const logout = () => {
sessionStorage.clear();
navigate("/");

    }

    return (
        <>
            <Navbar bg="dark" expand="lg" className="home-navbar">
                <Container>
                    <Navbar.Brand className="navbar-brand d-lg-block d-none">
                        <Image
                            src='Dat-Donut-Logo-2.png'
                            className="mt-5"
                            fluid
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        onClick={handleOffcanvasToggle} 
                        className="navbar-toggler" 
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-lg-flex d-none">
                            <NavLink
                                to="/home"
                                className="fw-bold fs-5 text-white me-3 nav-link"
                            >
                                <FaHome />
                                &nbsp;Home
                            </NavLink>
                            <NavLink
                                to="/menu"
                                className="fw-bold fs-5 text-white me-3 nav-link"
                            >
                                <BsMenuButtonWideFill />
                                &nbsp;Menu
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="fw-bold fs-5 text-white me-3 nav-link"
                            >
                                <FaPeopleGroup />
                                &nbsp;About
                            </NavLink>
                            <NavLink
                                to="/reviews"
                                className="fw-bold fs-5 text-white me-3 nav-link"
                            >
                                <MdRateReview />
                                &nbsp;Reviews
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className="fw-bold fs-5 text-white me-3 nav-link"
                            >
                                <FaCartArrowDown />
                                &nbsp;Cart
                            </NavLink>
                        </Nav>
                        <Dropdown className="d-lg-block d-none">
                            <Dropdown.Toggle id="dropdown-basic" className="drpdwn">
                                <FaUserAlt size={22} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/editprofile">Profile</Dropdown.Item>
                                <Dropdown.Item href="/mypurchases">My Purchases</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <NavLink
                            to="/home"
                            className="fw-bold fs-4 text-dark mb-3 nav-link"
                        >
                            <FaHome />
                            &nbsp;Home
                        </NavLink>
                        <NavLink
                            to="/menu"
                            className="fw-bold fs-4 text-dark mb-3 nav-link"
                        >
                            <BsMenuButtonWideFill />
                            &nbsp;Menu
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="fw-bold fs-4 text-dark mb-3 nav-link"
                        >
                            <FaPeopleGroup />
                            &nbsp;About
                        </NavLink>
                        <NavLink
                            to="/reviews"
                            className="fw-bold fs-4 text-dark mb-3 nav-link"
                        >
                            <MdRateReview />
                            &nbsp;Reviews
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className="fw-bold fs-4 text-dark mb-3 nav-link"
                        >
                            <FaCartArrowDown />
                            &nbsp;Cart
                        </NavLink>
                    </Nav>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle id="dropdown-basic" className="drpdwn">
                            <FaUserAlt size={25} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/editprofile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/mypurchases">My Purchases</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Offcanvas.Body>
            </Offcanvas>
            <div className={`bg-home ${showOffcanvas ? 'd-lg-block d-none' : ''}`}>
                <Container className="d-lg-none d-block text-center">
                    <Image
                        src='Dat-Donut-Logo-2.png'
                        className="mt-2"
                        fluid
                    />
                </Container>
            </div>
        </>
    );
}

export default NavBar;