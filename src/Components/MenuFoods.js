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

function MenuFoods() {
    const [foodData, setFoodData] = useState([]);
    const navigate = useNavigate();

    const fetchFood = async () => {
        try {
            const response = await fetch("http://datdonut.test/api/viewfoods");
            const data = await response.json();
            setFoodData(data);
        } catch (error) {
            console.error("Error fetching Food data:", error);
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

    const handleClick = (foodId) => {
        sessionStorage.setItem('food_id', foodId);
        navigate("/confirmbuy");
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
            <Container className="d-flex flex-wrap justify-content-evenly gap-5 p-5">
                    {foodData && foodData.map((food) => (
                       
                        <div key={food.food_id}>
                            <Card 
                                className="m-3 card-register w-25"
                                onClick={() => handleClick(food.food_id)} 
                            >
                                {food.food_category}
                                <Card.Img 
                                 height={200}
                                 width={200}
                                src={food.image_link ? `http://datdonut.test/storage/${food.image_link}` : 'menu.png'} 
                                />
                                <Card.Text className='fw-bold d-flex justify-content-center mt-2 fs-2'>
                                    <span 
                                        onClick={handleClick}
                                        style={{ cursor: 'pointer' }} // Add this style
                                    >
                                        <FaCartArrowDown />
                                    </span>
                                    {food.food_name} | {food.price}
                                </Card.Text>
                            </Card> 
                        </div>
                    ))}
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Footer />
        </>
    );
}

export default MenuFoods;
