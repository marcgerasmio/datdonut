import React, { useState, useEffect } from "react";
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Food() {
    const [foodData, setFoodData] = useState([]);
    const navigate = useNavigate();

    const fetchFood = async () => {
        try {
            const response = await fetch("http://datdonut.test/api/viewfoods");
            const data = await response.json();
            console.log(data);
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

    // Group foodData by food_category
    const groupedFoodData = foodData.reduce((acc, curr) => {
        acc[curr.food_category] = [...(acc[curr.food_category] || []), curr];
        return acc;
    }, {});

    return (
        <>
            <NavBar />
            <Container className="w-100 mt-3 mb-5">
                <hr className="hr" />
                <Container className="d-flex justify-content-center">
                    <h1 className="title-text">
                        OUR DONUTS
                    </h1>
                </Container>
                <hr className="hr" />
            </Container>
            <Container className="mb-5">
                {Object.entries(groupedFoodData).map(([category, foods]) => (
                    <div key={category}>
                        <h1>{category}</h1>
                        <Row className="justify-content-center">
                            {foods.map((foodItem, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                    <Card className="card-register">
                                        <Card.Img
                                            src={foodItem.image_link ? `http://datdonut.test/storage/${foodItem.image_link}` : 'menu.png'}
                                            alt={foodItem.food_name}
                                            height={200}
                                            width={200}
                                        />
                                        <Card.Footer className="border-0">
                                            <Button
                                                className="w-100 rounded-pill mt-2 fw-bold login-button"
                                                onClick={() => handleClick(foodItem.food_id)}
                                            >
                                                <FaShoppingCart /> &nbsp;
                                                {foodItem.food_name} &nbsp;&nbsp;&nbsp;&nbsp;
                                                ${foodItem.price}
                                            </Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Container>
            <Footer />
        </>
    );
}

export default Food;
