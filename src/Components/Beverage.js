import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import {
    Card, Container,
    Button
} from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Beverage() {
    const [beverageData, setBeverageData] = useState([]);
    const navigate = useNavigate();

    const fetchFood = async () => {
        try {
            const response = await fetch("http://datdonut.test/api/viewbeverage");
            const data = await response.json();
            setBeverageData(data);
        } catch (error) {
            console.error("Error fetching Food data:", error);
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

    const handleClick = (beverageId) => {
        sessionStorage.setItem('beverage_id', beverageId);
        navigate("/confirmbuy-beverage");
    };

    return(
        <>
            <NavBar />
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-evenly mt-5 mb-5">
                <h1 className="title-text">OUR BEVERAGES</h1>
            </Container>
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="mb-5 d-flex flex-wrap justify-content-evenly">
                {beverageData.map((beverage, index) => (
                    <Card key={index} className="m-3 card-register w-25">
                        <Card.Img
                            src={beverage.image_link ? `http://datdonut.test/storage/${beverage.image_link}` : 'menu.png'} 
                            alt={beverage.food_name}
                            height={200}
                            width={200}
                        />
                        <Card.Footer className="border-0">
                            <Button
                                className="w-100 rounded-pill mt-2 fw-bold login-button"
                                onClick={() => handleClick(beverage.beverage_id)}  
                            >
                                <FaShoppingCart /> &nbsp;
                                {beverage.food_name} &nbsp;&nbsp;&nbsp;&nbsp;
                                ${beverage.price}
                            </Button>
                        </Card.Footer>
                    </Card>
                ))}
            </Container>
            <Footer />
        </>
    );
}

export default Beverage;
