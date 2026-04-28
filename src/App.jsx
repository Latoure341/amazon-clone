import "./App.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
