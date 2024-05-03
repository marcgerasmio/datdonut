import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Table, Row, Col } from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [foodData, setFoodData] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const navigate = useNavigate();

    const fetchFood = async () => {
        const username = sessionStorage.getItem("username");
        try {
            const response = await fetch(`http://datdonut.test/api/viewcart/${username}`);
            const data = await response.json();
            setFoodData(data);
        } catch (error) {
            console.error("Error fetching Food data:", error);
        }
    };

    const handleClick = (food) => {
        setSelectedFood(food);
        setShowModal(true);
    };

    const handleDelete = (food) => {
        if (food && food.order_id) {
            setSelectedFood(food); 
            const isConfirmed = window.confirm("Are you sure you want to delete the order?");
            if (isConfirmed) {
                deleteOrder();
            }
        } else {
            console.error("Food object or its order_id property is null or undefined.");
        }
    };

    const handleCheckboxChange = (event, id) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        fetchFood();
    };

    useEffect(() => {
        fetchFood();
    }, []);

    const handleEdit = () => {
        console.log("Food Details:", selectedFood);
        console.log(selectedFood.order_id);
    };

    const deleteOrder = async () => {
        const selectedId = selectedFood.order_id;
        try {
            const response = await fetch(`http://datdonut.test/api/deleteorder/${selectedId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data);
            fetchFood();
        } catch (error) {
            alert("Update failed. Please try again.");
            console.error('Error updating:', error.message);
        }
    };

    const editOrder = async () => {
        const selectedId = selectedFood.order_id;
        const quantity = selectedFood.quantity;
        const price = selectedFood.price;
        const final_price = parseInt(quantity) * parseFloat(price);
        try {
            const response = await fetch(`http://datdonut.test/api/updatespecificorder/${selectedId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quantity: quantity,
                    final_price: final_price,
                }),
            });
            const data = await response.json();
            console.log(data);
            handleCloseModal();
        } catch (error) {
            alert("Update failed. Please try again.");
            console.error('Error updating:', error.message);
        }
    };

    const checkout = async () => {
        if (!selectedIds || selectedIds.length === 0) {
            alert("No items selected. Please select items before checking out.");
            return;
        }
    
        try {
            const response = await fetch("http://datdonut.test/api/updateorder", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'completed',
                    order_id: selectedIds.toString(),
                }),
            });
            const data = await response.json();
            console.log(data);
            alert("CHECKOUT SUCCESSFUL");
            handleCloseModal();
        } catch (error) {
            alert("Update failed. Please try again.");
            console.error('Error updating:', error.message);
        }
    };

    return (
        <>
            <NavBar />
            <Container className="w-100 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container fluid className="d-flex justify-content-center mt-5 mb-5">
                <h1 className="title-text">CART</h1>
            </Container>
            <Container>
                {foodData && foodData.length > 0 ? (
                    <>
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Image</th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Final Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodData.map((food) => (
                                    <tr key={food.food_id}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                onChange={(e) => handleCheckboxChange(e, food.order_id)}
                                            />
                                        </td>
                                        <td>
                                            <img
                                                height={50}
                                                width={70}
                                                src={
                                                    food.image_link
                                                        ? `http://datdonut.test/storage/${food.image_link}`
                                                        : "navi-logo.png"
                                                }
                                                alt={food.food_name}
                                            />
                                        </td>
                                        <td>{food.order_name}</td>
                                        <td>${food.price.toFixed(2)}</td>
                                        <td>{food.quantity}</td>
                                        <td>${food.final_price.toFixed(2)}</td>
                                        <td>
                                            <Button variant="primary" className="me-2 edit-button" onClick={() => handleClick(food)}>EDIT</Button>{" "}
                                            <Button onClick={() => handleDelete(food)} variant="danger">DELETE</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Container fluid className="d-flex justify-content-center mb-5 w-50">
                            <Button onClick={checkout} className="fw-bold login-button w-25 rounded-pill p-2">Check Out</Button>
                        </Container>
                    </>
                ) : (
                    <div className="text-center">
                        <p>No Items in Cart</p>
                    </div>
                )}
            </Container>
            <Container className="w-100 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Footer />
    
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedFood && (
                        <Row>
                            <Col>
                                <img
                                    src={
                                        selectedFood.image_link
                                            ? `http://datdonut.test/storage/${selectedFood.image_link}`
                                            : "image.png"
                                    }
                                    alt={selectedFood.food_name}
                                    height={200}
                                    width={400}
                                />
                            </Col>
                            <Col>
                                <p>
                                    Item: {selectedFood.order_name}<br/>
                                    Price: ${selectedFood.price.toFixed(2)}
                                </p>
                                <p>
                                    Quantity:{" "}
                                    <input
                                        type="number"
                                        value={selectedFood.quantity}
                                        onChange={(e) =>
                                            setSelectedFood({
                                                ...selectedFood,
                                                quantity: parseInt(e.target.value)
                                            })
                                        }
                                    />
                                </p>
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
    
                <Modal.Footer>
                    <Button className="fw-bold login-button w-25" onClick={editOrder}>
                        SAVE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cart;
