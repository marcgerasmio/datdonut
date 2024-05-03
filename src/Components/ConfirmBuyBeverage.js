import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import {
    Card, Container,
    Button, Row, Col
} from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ConfirmBuyBeverage() {
    const navigate = useNavigate();
    const [beverageData, setBeverageData] = useState('');
    const [quantity, setQuantity] = useState(1); // Default quantity is 1
    const beverageId = sessionStorage.getItem("beverage_id");
    const fetchBeverage = async () => {
        try {
            const response = await fetch(`http://datdonut.test/api/getbeverage/${beverageId}`);
            const data = await response.json();
            // Convert the object into an array with one element
            const dataArray = data ? [data] : []; // Ensure dataArray is an array
            setBeverageData(dataArray);
        } catch (error) {
            console.error("Error fetching Food data:", error);
        }
    };

    useEffect(() => {
        fetchBeverage();
    }, []);

    const buynow = async (beverage) => {
        const username = sessionStorage.getItem("username");
        const finalprice = parseInt(beverage.price) * parseInt(quantity);
        try {
          // Proceed with submission
          const response = await fetch('http://datdonut.test/api/createorder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              customername: username,
              order_name:beverage.beverage_name,
              image_link:beverage.image_link,
              price:beverage.price,
              quantity: quantity,
              final_price: finalprice,
              status:'completed',

            }),
          });
          const data = response.json();
          console.log(data);
          alert("order successful");
          navigate("/mypurchases");
          
        
        } catch (error) {
          // Handle errors
          alert("Submission failed. Please try again.");
          console.error('Error submitting:', error.message);
        }
    };


    const addtocart = async (beverage) => {
        const username = sessionStorage.getItem("username");
        const finalprice = parseFloat(beverage.price) * parseInt(quantity);
        try {
          // Proceed with submission
          const response = await fetch('http://datdonut.test/api/createorder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              customername: username,
              order_name:beverage.beverage_name,
              image_link:beverage.image_link,
              price:beverage.price,
              quantity: quantity,
              final_price: finalprice,
              status:'added to cart',

            }),
          });
          const data = response.json();
          console.log(data);
          alert("added to cart");
          navigate("/cart");
        
        } catch (error) {
          // Handle errors
          alert("Submission failed. Please try again.");
          console.error('Error submitting:', error.message);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const cancel = () => {
        navigate("/beverage")
    }
   
    return(
        <>
            <NavBar />
            <Container className="w-50 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-evenly mt-5 mb-5">
                <h1>CONFIRM BUY</h1>
            </Container>
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container>
                <div className="d-flex flex-wrap justify-content-evenly mb-5">
                    {beverageData && beverageData.map((beverage) => (
                        <div key={beverage.beverage_id}>
                            <Card className="card-login" style={{width: '50rem'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Img 
                                                variant="top"
                                                height={250}
                                                src={beverage.image_link ? `http://datdonut.test/storage/${beverage.image_link}` : 'navi-logo.png'} 
                                            />
                                        </Col>
                                        <Col>
                                            <Card.Title className="title-text">Item Name: {beverage.beverage_name}</Card.Title>
                                            <Card.Title className="title-text">Item Price: ${beverage.price}</Card.Title>
                                            <div className="d-flex align-items-center mt-4">
                                                <div className="quantity-input">
                                                    <button className="quantity-button" onClick={decrementQuantity}>-</button>
                                                    <input className="quantity w-25" type="number" value={quantity} readOnly />
                                                    <button className="quantity-button" onClick={incrementQuantity}>+</button>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-evenly mt-5">
                                                <Button 
                                                    variant="outline-danger fw-bold"
                                                    onClick={cancel}
                                                    className="me-2"
                                                >
                                                    CANCEL
                                                </Button>
                                                <Button 
                                                    className="me-2 fw-bold"
                                                    variant="primary" 
                                                    onClick={() => addtocart(beverage)}
                                                >
                                                    ADD TO CART
                                                </Button>
                                                <Button 
                                                    variant="primary" 
                                                    onClick={() => buynow(beverage)}
                                                    className="me-2 fw-bold login-button"
                                                >
                                                    BUY NOW
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </div>
                    ))}
                </div>
            </Container>
            <hr className="hr" />
            <Footer />
        </>
    );
}

export default ConfirmBuyBeverage;
