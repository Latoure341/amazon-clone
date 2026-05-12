import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { LuTrash } from "react-icons/lu";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import RightCartPanel from "../CartItems/RightCartPanel";
import {
  getCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../utils/cartUtil";

const Checkout = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => getCart());
  const currentProduct = JSON.parse(localStorage.getItem("productDetails"));
  const currentLine = useMemo(
    () =>
      products.find((p) => p.title === currentProduct?.title),
    [products, currentProduct?.title],
  );
  const quantity = Number(currentLine?.quantity ?? 1);
  const totalUnits = useMemo(
    () =>
      products.reduce((sum, item) => sum + Number(item.quantity ?? 1), 0),
    [products],
  );

  useEffect(() => {
    const sync = () => {
      setProducts(getCart());
    };
    sync();
    window.addEventListener("cartUpdated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("cartUpdated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const subtotal = useMemo(
    () =>
      products.reduce(
        (sum, item) =>
          sum +
          Number(item.price ?? 0) * Number(item.quantity ?? 1),
        0,
      ),
    [products],
  );
  const freeDelivery = subtotal >= 500;

  return (
    <>
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen overflow-x-hidden text-slate-900 dark:text-white">
      <NavBar />
      <section className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white m-1 flex flex-col items-start gap-2 lg:flex-row">
        <main className="min-w-0 w-full p-2 lg:w-4/6">
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
                  className="h-auto w-full max-w-[12.5rem] object-contain sm:max-w-sm"
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
                        const key = currentProduct?.title;
                        if (!key) {
                          return;
                        }
                        if (quantity <= 1) {
                          removeFromCart(key);
                        } else {
                          updateCartItemQuantity(key, quantity - 1);
                        }
                      }}
                    />
                    <p className="text-xs font-bold">{quantity}</p>
                    <p
                      className="cursor-pointer font-bold"
                      onClick={() => {
                        const key = currentProduct?.title;
                        if (!key) {
                          return;
                        }
                        updateCartItemQuantity(key, quantity + 1);
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
                Subtotal ({totalUnits} item{totalUnits !== 1 ? "s" : ""}):{" "}
                <strong>R {subtotal.toFixed(2)}</strong>
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

        <aside className="min-w-0 w-full p-2 lg:w-2/6">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start gap-3">
                <HiOutlineCheckCircle className="mt-1 text-3xl text-green-600" />
                <div>
                  {freeDelivery ? (
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Your order qualifies for FREE Delivery.
                    </p>
                  ) : (
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Your order qualifies. Shipping Fee is R70.
                    </p>
                  )}
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                    Select this option at checkout. <span className="text-blue-600 underline cursor-pointer">Delivery Details</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 text-sm text-slate-900 dark:text-slate-100">
                <p className="font-medium">
                  Subtotal ({totalUnits} item{totalUnits !== 1 ? "s" : ""}):{" "}
                  <strong>R {subtotal.toFixed(2)}</strong>
                </p>
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 bg-white text-blue-600" />
                <span>This order contains a gift</span>
              </label>

              <button
                onClick={() => {
                  if (localStorage.getItem("EmailOrNumber") === null) {
                    navigate("/login");
                  } else if (products.length === 0) {
                    navigate("/login");
                  } else {
                    navigate("/checkout/shipping");
                  }
                }}
                className="mt-6 w-full rounded-xl bg-yellow-300 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-yellow-400"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </aside>
      </section>
      <Footer />
    </div>
    <RightCartPanel />
    </>
  );
};

export default Checkout;
