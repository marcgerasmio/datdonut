import {
    Navbar, Container
} from "react-bootstrap";
import "../App.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer(){
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="footer-nav">
                <Container>
                    <p className="text-white">
                        <span className="fw-bold">ADDRESS</span><br/><br/>
                        8521 S. Cottage<br/>
                        Grove Ave.<br/>
                        Chicago, IL. 60619
                    </p>
                    <p className="text-white">
                        <span className="fw-bold">HOURS</span><br/><br/>
                        Monday - Saturday<br/>
                        5:30AM - 10:00PM<br/>
                        Sunday 6:30AM - 5:00PM
                    </p>
                    <p className="text-white">
                        <span className="fw-bold">CONTACT</span><br/><br/>
                        info@datdonut.com<br/>
                        info@datdonut.com<br/>
                        Tel: 773-723-1002
                    </p>
                </Container>
                <Container className="d-flex justify-content-end">
                    <p className="text-white">
                        <div className="d-flex justify-content-center justify-content-md-around">
                            <div><FaFacebook size={24} />&nbsp;&nbsp;</div>
                            <div><FaTwitter size={24} />&nbsp;&nbsp;</div>
                            <div><FaInstagramSquare size={24} />&nbsp;&nbsp;</div>
                        </div><br/>
                        ©Dat Donut Enterprises Inc.<br/>
                        Website created<br/>
                        by Kyoka & Maikuuqt
                    </p>
                </Container>
            </Navbar>
        </>
    );
}

export default Footer;