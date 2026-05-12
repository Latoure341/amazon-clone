import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";

import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Products from "./components/Products/Products";
import ProductListing from "./components/Products/ProductListing";
import Checkout from "./components/Checkout/Checkout";
import ShippingForm from "./components/Checkout/ShippingForm";
import { getCart } from "./components/utils/cartUtil";

function App() {
  const [hasCartItems, setHasCartItems] = useState(false);

  useEffect(() => {
    const updateCartItems = () => {
      const cart = getCart();
      setHasCartItems(Array.isArray(cart) && cart.length > 0);
    };

    updateCartItems();
    window.addEventListener("cartUpdated", updateCartItems);
    window.addEventListener("storage", updateCartItems);

    return () => {
      window.removeEventListener("cartUpdated", updateCartItems);
      window.removeEventListener("storage", updateCartItems);
    };
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />  
          <Route path="/checkout/shipping" element={<ShippingForm />} />
    </Routes>
      <div className={hasCartItems ? "lg:pr-50" : ""}>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/productlist" element={<ProductListing />} />
        </Routes>
      </div>
    
    </>
  );
}

export default App;
