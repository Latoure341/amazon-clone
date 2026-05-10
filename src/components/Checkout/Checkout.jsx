import React, { useMemo, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { LuTrash } from "react-icons/lu";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import RightCartPanel from "../CartItems/RightCartPanel";

const Checkout = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [products] = useState(Array.isArray(storedCart) ? storedCart : []);
  const currentProduct = JSON.parse(localStorage.getItem("productDetails"));
  const subtotal = useMemo(
    () => products.reduce((sum, item) => sum + Number(item.price || 0), 0),
    [products],
  );
  const freeDelivery = subtotal >= 500;

  return (
    <>
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen overflow-x-hidden text-slate-900 dark:text-white">
      <NavBar />
      <section className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white m-1 flex flex-col lg:flex-row items-start gap-2">
        <main className="p-2 w-full lg:w-4/6">
          <div className="bg-white dark:bg-gray-800 p-1">
            <h1 className="p-2 text-3xl font-semibold">Shopping Basket</h1>
            <span className="text-xs pb-2 px-2 border-b-1 border-gray-300 w-full flex justify-end">
              Price
            </span>

            <div className="p-2 flex justify-between items-start">
              <span>
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="w-50"
                />
              </span>
              <span className="p-2">
                <p>{currentProduct.title}</p>
                <p>{currentProduct.description}</p>
                <span className="flex gap-1">
                  <button className="px-2 py-1 bg-orange-700 text-xs text-white font-semibold rounded-md">
                    #1 Best Seller
                  </button>
                  <p className="text-slate-400">in Video games</p>
                </span>
                <p className="text-green-800 text-xs">In stock</p>
                <p>{currentProduct.delivery} available at Checkout</p>
                <span className="flex gap-1 py-2">
                  <input type="checkbox" />
                  <p className="text-xs">This will be a gift</p>
                  <a href="#" className="text-blue-500 text-xs">
                    Learn more
                  </a>
                </span>
                <p className="text-xs">
                  <strong>Colour Name</strong>: Black/White
                </p>

                <span className="flex gap-2 mt-1 py-2">
                  <span className="flex items-center justify-between gap-1 border-3 border-yellow-400 rounded-xl py-0 px-3 w-25">
                    <LuTrash
                      className="text-xs cursor-pointer font-bold"
                      onClick={() => {
                        if (quantity > 0) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    />
                    <p className="text-xs font-bold">{quantity}</p>
                    <p
                      className="cursor-pointer font-bold"
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      +
                    </p>
                  </span>

                  <p>
                    | <span className="text-xs text-blue-600">Delete</span>
                  </p>
                  <p>
                    |{" "}
                    <span className="text-xs text-blue-600">
                      Save for later
                    </span>
                  </p>
                  <p>
                    | <span className="text-xs text-blue-600">Share</span>
                  </p>
                </span>
              </span>

              <span className="px-2 font-semibold">
                R {currentProduct.price}
              </span>
            </div>
            <span className="w-full border-t-1 border-gray-200 pb-2 flex justify-end items-center">
              <p>
                Subtotal (1 item): <strong>R {currentProduct.price}</strong>
              </p>
            </span>
          </div>

          <div className="p-2 bg-white"></div>
          <p className="text-wrap text-xs py-3 mt-1">
            The price and availability of items at Amazon.co.za are subject to
            change. The Basket is a temporary place to store a list of your
            items and reflects each item's most recent price. Do you have a gift
            card or promotional code? We'll ask you to enter your claim code
            when it's time to pay.
          </p>
        </main>

        <aside className="w-full lg:w-2/6 p-2 bg-white dark:bg-gray-800">
          <span className="flex gap-1 bg-white p-2">
            <HiOutlineCheckCircle className="text-3xl" />
            <span>
              {
                freeDelivery ? <p className="text-xs">Your order qualifies for FREE Delivery.</p> 
                : <p className="text-xs">Your order qualifies Shipping Fee is R70.</p>
              }
              <p className="text-xs">
                Select this option at checkout.{" "}
                <span className="text-blue-600 underline">
                  Delivery Details
                </span>
              </p>
            </span>
          </span>

          <span className="bg-white p-2">

            <h3 className="bg-white text-xs">
              Subtotal (1 item): <strong>R 1 499.00</strong>
            </h3>
            <span className="flex gap-1 bg-white">
              <input type="checkbox" className="bg-white" />
              <p className="bg-white text-xs">This order contains a gift</p>
            </span>

            <button 
            onClick={()=>{
              if(localStorage.getItem("EmailOrNumber")=== null){
                navigate("/login")
              } else if(products.length === 0){
                navigate("/login");
              }
              else {
                navigate("/checkout/shipping")
              }          
            }}
            className="bg-yellow-300 py-1 px-7 rounded-xl text-sm mt-3 mb-6">
              Proceed to checkout
            </button>
          </span>
        </aside>
      </section>
      <Footer />
    </div>
    <RightCartPanel />
    </>
  );
};

export default Checkout;
