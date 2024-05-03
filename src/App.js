import { Routes,Route } from "react-router-dom";
import Auth from "./Login/Auth.js";
import Register from "./Login/Register.js";
import Home from "./Components/Home.js";
import Menu from "./Components/Menu.js";
import About from "./Components/About.js";
import ConfirmBuy from "./Components/ConfirmBuy.js";
import ConfirmBuyBeverage from "./Components/ConfirmBuyBeverage.js";
import MenuFoods from "./Components/MenuFoods.js";
import MenuBeverage from "./Components/MenuBeverage.js";
import Cart from "./Components/Cart.js";
import MyPurchases from "./Components/MyPurchases";
import EditProfile from "./Login/EditProfile.js";
import Reviews from "./Components/Reviews.js";
import Food from "./Components/Food.js";
import Beverage from "./Components/Beverage.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu-foods" element={<MenuFoods />} />
        <Route path="/menu-beverage" element={<MenuBeverage />} />
        <Route path="/confirmbuy" element={<ConfirmBuy />} />
        <Route path="/confirmbuy-beverage" element={<ConfirmBuyBeverage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypurchases" element={<MyPurchases />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/food" element={<Food />} />
        <Route path="/beverage" element={<Beverage />} />
      </Routes>
    </>
  );
}

export default App;
