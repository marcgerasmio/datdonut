import {
    Navbar, Container,
    Nav, Image,
    Dropdown
} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import "../App.css";

function NavBar(){
    return(
        <>
            <Navbar bg="dark" className="home-navbar">
                <Container>
                    <Navbar.Brand className="navbar-brand">
                        <Image 
                            src='Dat-Donut-Logo-2.png' 
                            className="mt-5"
                            fluid 
                        />
                    </Navbar.Brand>
                    <div className="d-flex justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="fw-bold fs-4 text-white me-3">
                                <FaHome />
                                &nbsp;Home
                            </Nav.Link>
                            <Nav.Link href="#features" className="fw-bold fs-4 text-white me-3">
                                <BsMenuButtonWideFill />
                                &nbsp;Menu
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="fw-bold fs-4 text-white me-3">
                                <FaPeopleGroup />
                                &nbsp;About
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="fw-bold fs-4 text-white me-3">
                                <MdRateReview />
                                &nbsp;Reviews
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="fw-bold fs-4 text-white me-3">
                                <FaCartArrowDown />
                                &nbsp;Cart
                            </Nav.Link>
                        </Nav>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="drpdwn">
                            <FaUserAlt size={25} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;