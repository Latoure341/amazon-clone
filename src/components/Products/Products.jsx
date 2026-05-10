import React, { useState } from "react";
import { addToCart } from "../utils/cartUtil";
import RightCartPanel from "../CartItems/RightCartPanel";

import Footer from "../Footer/Footer";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const product = JSON.parse(localStorage.getItem("productDetails"));
  const navigate = useNavigate();

  // const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1);


  const filledStars = Math.floor(product.rating);
  const hasHalfStar = product.rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      <NavBar />
      <main className="bg-slate-50 min-h-screen">
        <section className="bg-white py-3">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 sm:px-6 lg:px-8 text-sm">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Electronics
            </span>
            <span>/</span>
            <span className="text-blue-600 hover:underline cursor-pointer">
              Computers & Accessories
            </span>
            <span>/</span>
            <span className="">{product.title}</span>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_2fr_1fr]">
            <div className="bg-white p-4 shadow-sm">
              <div className="overflow-hidden bg-slate-100 p-4">
                <img
                  src={product.image}
                  alt=""
                  className="h-[440px] w-full object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-6">
              <h1 className="text-2xl font-semibold leading-tight">
                {product.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: filledStars }).map((_, index) => (
                    <BsFillStarFill key={`filled-${index}`} />
                  ))}
                  {hasHalfStar && <BsStarHalf />}
                  {Array.from({ length: emptyStars }).map((_, index) => (
                    <BsStar key={`empty-${index}`} className="" />
                  ))}
                </div>
                <span className="font-small text-slate-800">
                  {product.rating}
                </span>
                <span className="font-small text-slate-500">
                  ({product.reviews} ratings)
                </span>
              </div>
              <span className="border-b-1 border-gray-200 pb-3 w-full flex justify-start mt-2">
                <button
                  type="button"
                  className="mx-1 rounded-lg py-1 px-2 text-xs text-white bg-orange-500 hover:bg-amber-500"
                >
                  #1 Best Seller
                </button>
                <a className="text-sm text-blue-600 hover:underline" href="#">
                  in Electronics
                </a>
              </span>

              <div className="mt-3 p-5">
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-semibold text-slate-900">
                    R{product.price}
                  </span>
                  <span className="text-sm text-red-600">-38%</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  List Price:{" "}
                  <span className="line-through">
                    R{product.listPrice}
                  </span>
                </p>
                <p className="mt-2 text-sm text-black">
                  All prices included VAT.
                </p>

                <div className="flex gap-4 items-center p-3 border-b-1 border-gray-200">
                  <span className="flex flex-col justify-center">
                    <img
                      src="https://m.media-amazon.com/images/G/53/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB615866594_.png"
                      className="w-10"
                    />
                    <p className="text-blue-700 text-xs w-20 mt-2">
                      FREE delivery
                    </p>
                  </span>

                  <span className="flex flex-col  justify-center">
                    <img
                      src="https://m.media-amazon.com/images/G/53/A2I-Convert/mobile/IconFarm/icon-returns._CB615866552_.png"
                      className="w-10"
                    />
                    <p className="text-blue-700 text-xs w-20 mt-2">
                      30 days returnable
                    </p>
                  </span>

                  <span className="flex flex-col justify-center">
                    <img
                      src="https://m.media-amazon.com/images/G/53/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB615866524_.png"
                      className="w-10"
                    />
                    <p className="text-blue-700 text-xs w-20 mt-2">
                      Secure Transaction
                    </p>
                  </span>
                </div>
              </div>

              <div className="mt-1 text-sm text-slate-700 px-4">
                <p className="font-bold text-slate-900">About this item</p>
                <ul className="mt-3 list-disc space-y-2 pl-2 text-slate-700">
                  {product.description}
                </ul>
              </div>
            </div>

            <aside className="bg-white px-6 py-2 shadow-sm border-1 border-gray-200 rounded-lg">
              <div className="space-y-4">
                <div className="text-3xl font-semibold text-slate-900">
                  R{product.price}
                </div>

                <div className="grid gap-2 text-sm">
                  <div className="text-slate-900 font-medium">
                    {product.delivery} . 
                    <a href="#" className="text-blue-600 underline px-1">Details</a>
                  </div>
                  <p>Or fastest delivery <b>Today <br/> 5 pm - 8 pm</b>.
                  <span className="text-orange-700 px-1">Order within 46 mins</span>.
                  <a href="#" className="text-blue-600 underline px-1">Details</a></p>
                  <span className="flex gap-1 text-xs">
                    <FaLocationDot className="" />
                    <a href="#" className="text-blue-600 underline px-1">Deliver to Krugersdorp, 1754 - 
                      <br/> update location</a>
                  </span>
                  <p className="mt-2 text-green-700 px-1 text-lg">In Stock</p>
                </div>

                <div className="flex items-center justify-between gap-3 border-1 px-2 rounded-lg">
                  <label
                    htmlFor="qty"
                    className="text-sm font-medium text-slate-700 outline-none"
                  >
                    Quantity:
                  </label>
                  <select
                    id="qty"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(Number(event.target.value))
                    }
                    className="h-11 bg-white px-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-0 focus:ring-white p-0"
                  >
                    {[1, 2, 3, 4, 5].map((amount) => (
                      <option key={amount} value={amount}>
                        {amount}
                      </option>
                    ))}
                  </select>
                </div>

                <button onClick={()=>{

                  addToCart(product)
                  navigate("/checkout")
                }}
                  type="button"
                  className="w-full cursor-pointer font-bold rounded-3xl bg-[#ffd814] px-4 py-2 text-xs text-slate-900 hover:bg-[#f7ca00]"
                >
                  Add to basket
                </button>
                <button
                  type="button"
                  className="w-full font-bold rounded-3xl bg-orange-400 px-4 py-2 text-xs text-black hover:bg-orange-500"
                >
                  Buy Now
                </button>

                <div className="px-2 mt-2 pb-5 border-b-1 border-gray-200">
                  <span className="flex gap-4 text-xs mb-2">
                    <p>Ships from </p>
                    <p className="text-black font-bold">Amazon</p>
                  </span>
                  <span className="flex gap-4 text-xs mb-2">
                    <p>Sold By: </p>
                    <p className="text-blue-600">Goland Traders za</p>
                  </span>
                  <span className="flex gap-4 text-xs mb-2">
                    <p>Gift option </p>
                    <p className="text-blue-600">Available at checkout</p>
                  </span>
                  <span className="flex gap-4 text-xs mb-2">
                    <p>Payment</p>
                    <p className="text-blue-700">Secure Transaction</p>
                  </span>

                </div>

                <button type="button" className="w-full text-start text-black text-sm py-1 px-2 border-1 border-gray-600 rounded-lg">
                  Add to list
                  </button>

              </div>

              <div className="w-full mt-4 shadow-sm border-1 border-gray-300 p-3 rounded-lg">
                <h3 className="text-black font-bold">Other Sellers on Amazon</h3>
              </div>
            </aside>
          </div>
        </section>

        <Footer />
      </main>
      <RightCartPanel />
    </>
  );
};

export default Products;
