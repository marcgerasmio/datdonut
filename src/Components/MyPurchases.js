import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";

function MyPurchases() {
    const [foodData, setFoodData] = useState([]);

    const fetchFood = async () => {
        const username = sessionStorage.getItem("username");
        try {
            const response = await fetch(`http://datdonut.test/api/vieworder/${username}`);
            const data = await response.json();
            setFoodData(data);
        } catch (error) {
            console.error("Error fetching Food data:", error);
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

    return (
        <>
            <NavBar />
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-evenly mt-5 mb-5">
                <h1>MY PURCHASES</h1>
            </Container>
            <Container className="text-center">
                {foodData && foodData.length > 0 ? (
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Final Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodData.map((food) => (
                                <tr key={food.food_id}>
                                    <td>
                                        <img
                                            src={
                                                food.image_link
                                                    ? `http://datdonut.test/storage/${food.image_link}`
                                                    : "navi-logo.png"
                                            }
                                            alt={food.food_name}
                                            style={{ width: "100px", height: "100px" }}
                                        />
                                    </td>
                                    <td>{food.order_name}</td>
                                    <td>${food.price.toFixed(2)}</td>
                                    <td>{food.quantity}</td>
                                    <td>${food.final_price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>No Purchases</p>
                )}
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Footer />
        </>
    );
}

export default MyPurchases;
