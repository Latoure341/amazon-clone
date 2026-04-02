import "./App.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/Product-details/ProductDetails";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
