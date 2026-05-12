import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCartCount } from "../utils/cartUtil";

import { FaLocationDot, FaMagnifyingGlass, FaShop } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { IoIosMenu } from "react-icons/io";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  const [accountModal, setAccountModal] = useState(false);
  const [cartCount, setCartCount] = useState(() => getCartCount());
  const navigate = useNavigate();

  useEffect(() => {
    const syncCount = () => {
      setCartCount(getCartCount());
    };
    syncCount();
    window.addEventListener("cartUpdated", syncCount);
    window.addEventListener("storage", syncCount);
    return () => {
      window.removeEventListener("cartUpdated", syncCount);
      window.removeEventListener("storage", syncCount);
    };
  }, []);
  const signInpage = () => {
    setAccountModal(!accountModal);
  };
  const homePage = () => {
    navigate("/");
  };
  const handleClick = ()=> {
    navigate("/checkout"); 
  }

  return (
    <>
      <nav className="flex w-full h-auto flex-wrap gap-2 sm:gap-3 justify-between items-center m-0 p-2 sm:p-1 bg-white dark:bg-[#131921] text-gray-900 dark:text-white overflow-x-hidden">
        <div
          className="logo cursor-pointer hover:border hover:border-white hover:rounded-sm p-2"
          onClick={homePage}
        >
          <img
            src="https://banner2.cleanpng.com/lnd/20241213/cg/74d97a469873774f841633779c982d.webp"
            alt="logo"
            height={20}
            width={30}
          />
        </div>
        <div className="location flex flex-col hover:border hover:border-white hover:rounded-sm p-1">
          <span className="text-xs cursor-pointer">
            Delivering to Krugersdorp, 1754
          </span>
          <span className="text-xs cursor-pointer flex gap-1 font-bold items-center">
            <FaLocationDot />
            Update you location
          </span>
        </div>
        <div className="input flex flex-1 min-w-0 items-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer overflow-hidden rounded">
          <select
            name="categories"
            id="categories"
            className="text-xs border-none outline-none w-14 p-2 cursor-pointer"
          >
            <option value="All">All</option>
            <option value="Alexa">Alexa</option>
            <option value="Amazon Pay">Amazon Pay</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="outline-none border-none flex-1 min-w-0 p-2 cursor-pointer"
          />

          <span className="bg-orange-300 p-3 m-0">
            <FaMagnifyingGlass className="text-xl text-current m-0 p-0" />
          </span>
        </div>
        <div
          className="signIn hover:border-1 hover:rounded-sm flex flex-col cursor-pointer p-1"
          onClick={signInpage}
        >
          <span className="text-xs cursor-pointer">Hello, Sign in</span>
          <span className="text-xs font-bold cursor-pointer">
            Account & Lists
          </span>
        </div>

        {accountModal && (
          <>
            <div className="absolute top-14 bg-black text-white w-screen h-screen p-4 rounded-sm opacity-75 z-10"></div>
            <div className="absolute top-14 right-30 z-20 flex flex-col items-center bg-white text-black w-2/5 p-3 rounded-sm shadow-lg">
              <button className="cursor-pointer px-25 bg-[#ffd814] px-4 py-2 text-xs font-semibold text-slate-900 rounded-lg hover:bg-[#f7ca00] mb-2"
              onClick={()=>{navigate("/login")}}>
                Sign in
              </button>
              <p className="text-xs mb-4">New Customer? <a href="#" className="text-blue-500 hover:underline">Start Here.</a></p>
              <div className="p-4 flex justify-between w-full">
                <span>
                    <h3 className="font-bold text-black">Your Listing</h3>
                    <p className="text-sm hover:underline cursor-pointer">Create a list</p>
                </span>
                <span>
                    <h3 className="font-bold text-black">Your Account</h3>
                    <ul className="text-sm cursor-pointer">
                        <li className="hover:underline">Your Account</li>
                        <li className="hover:underline">Your Orders</li>
                        <li className="hover:underline">Keep Shopping for</li>
                        <li className="hover:underline">Your Recommendations</li>
                        <li className="hover:underline">Your Gift Card Balance</li>
                        <li className="hover:underline">Sell</li>
                    </ul>
                </span>
              </div>
            </div>
          </>
        )}

        <div className="ReturnsOrders hover:p-1 hover:border-1 hover:rounded-sm flex flex-col cursor-pointer">
          <span className="text-xs cursor-pointer">Returns</span>
          <span className="text-xs font-bold cursor-pointer">& Orders</span>
        </div>
        <DarkModeToggle />
        <div
        onClick={handleClick} 
        className="cart relative flex shrink-0 items-end cursor-pointer hover:border hover:border-white hover:rounded-s">
          <SlBasket className="text-3xl px-1 sm:text-5xl" />
          <span className="text-xs font-bold sm:text-sm">Basket</span>
          <p className="absolute z-10 -right-0.5 -top-1 min-w-[1.25rem] rounded-2xl bg-gray-200 px-1.5 py-0 text-center text-xs font-bold dark:bg-[#232f3e]">
            {cartCount}
          </p>
        </div>
      </nav>

      <section className="flex min-w-0 flex-wrap items-center overflow-x-auto text-gray-900 dark:text-white bg-gray-100 dark:bg-[#232f3e] sm:flex-nowrap">
        <div className="bg-gray-100 dark:bg-[#232f3e] flex min-w-0 flex-1 flex-wrap gap-2 p-1 sm:w-4/6 sm:flex-nowrap sm:gap-3">
          <span className="text-xs flex items-center gap-1 font-bold p-2 cursor-pointer hover:border-1">
            <IoIosMenu className="" />
            All
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Customer Service
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Today's Deals
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Keep Shopping For
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Everyday Essentials
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Best Sellers
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Shop Mzansi
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Gift Cards
          </span>
          <span className="text-xs font-bold p-2 cursor-pointer hover:border-1">
            Sell
          </span>
        </div>
        <span className="w-full shrink-0 bg-orange-500 p-1 text-center text-lg font-extrabold cursor-pointer hover:border-1 dark:bg-orange-600 sm:w-2/6 sm:text-2xl">
          Everyday Essentials
        </span>
      </section>
    </>
  );
};

export default NavBar;
