import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import {
    Card, Container,
    Button
} from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MenuBeverage() {
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
            <div className="bg-home"></div>
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-evenly mt-5 mb-5">
                <h1>FOODS</h1>
            </Container>
            <Container>
                <div className="d-flex flex-wrap justify-content-evenly gap-5 p-5">
                    {beverageData && beverageData.map((beverage) => (
                       
                        <div key={beverage.beverage_id}>
                            <Card 
                                className="team-card"
                                onClick={() => handleClick(beverage.beverage_id)} 
                            >
                                <Card.Img 
                                    src={beverage.image_link ? `http://datdonut.test/storage/${beverage.image_link}` : 'navi-logo.png'} 
                                />
                                <Card.Text className='fw-bold d-flex justify-content-center mt-2 fs-2'>
                                    <span 
                                        onClick={handleClick}
                                        style={{ cursor: 'pointer' }} // Add this style
                                    >
                                        <FaCartArrowDown />
                                    </span>
                                    {beverage.beverage_name} | {beverage.price}
                                </Card.Text>
                            </Card> 
                        </div>
                    ))}
                </div>
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Footer />
        </>
    );
}

export default MenuBeverage;
