import { Routes,Route } from "react-router-dom";
import Auth from "./Login/Auth.js";
import Register from "./Login/Register.js";
import Home from "./Components/Home.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
