import { Routes,Route } from "react-router-dom";
import Auth from "./Login/Auth.js";
import Register from "./Login/Register.js";
import Home from "./Components/Home.js";
import Menu from "./Components/Menu.js";
import About from "./Components/About.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
