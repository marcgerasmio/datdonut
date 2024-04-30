import {
    Container, Card,
    Carousel, Image
} from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function Home() {
    return(
        <>
            <NavBar />
            <div className="bg-home"></div>
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex">
                <Card className="w-50 me-5 p-5 text-card">
                    <Card.Body>
                        <Card.Text>
                            <div className="d-flex justify-content-center mb-2 title-text">
                                <h1 className="fw-bold text">WE ALSO SERVE</h1>
                            </div>
                            <h4 className="text">
                                - &nbsp;Breakfast<br/>
                                - &nbsp;Sandwiches<br/>
                                - &nbsp;Fruit Smoothies<br/>
                                - &nbsp;Coffee & Tea<br/>
                                - &nbsp;Milk & Juice
                            </h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Carousel className="w-75">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pic-home.png"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pic-home.png"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pic-home.png"
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="mt-5 d-flex justify-content-center">
                <h1>AS SEEN IN</h1>
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-evenly mb-5">
                <Image src="abc-7.png" alt="" />
                <Image src="1280px-WGN_9_logo_svg.png" alt="" />
                <Image src="Chicago-Tribune-Logo-200px-no-margins_pn.png" alt="" />
                <Image src="eaterchicago.png" alt="" />
            </Container>
            <Footer />
        </>
    );
}

export default Home;