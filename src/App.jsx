import "./App.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Products from "./components/Products/Products";
import ProductListing from "./components/Products/ProductListing";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/productlist" element={<ProductListing />} />
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
