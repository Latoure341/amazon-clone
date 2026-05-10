import React, { useEffect, useMemo, useState } from "react";
import { LuTrash } from "react-icons/lu";
import { getCart, removeFromCart } from "../utils/cartUtil";
import { useNavigate } from "react-router-dom";

const RightCartPanel = () => {

    const [cartItems, setCartItems] = useState(() => getCart());
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const updateCart = () => {
            setCartItems(getCart());
        };

        window.addEventListener("cartUpdated", updateCart);
        window.addEventListener("storage", updateCart);

        return () => {
            window.removeEventListener("cartUpdated", updateCart);
            window.removeEventListener("storage", updateCart);
        };
    }, []);

    const subtotal = useMemo(
        () =>
            cartItems.reduce((sum, item) => {
                const quantity = Number(item.quantity ?? 1);
                const price = Number(item.price ?? 0);
                return sum + quantity * price;
            }, 0),
        [cartItems],
    );

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return null;
    }

    return (
        <aside className="hidden lg:block fixed right-0 top-0 h-full w-50 bg-white dark:bg-gray-900 shadow-lg p-4 z-50 overflow-y-auto">
            <div className="mb-4 flex flex-col items-center justify-center border-b-1 dark:border-white border-gray-200 py-2">
                <p className="dark:text-white text-xs">Subtotal</p>
                <p className="text-xs font-semibold dark:text-red-500">
                    R {subtotal.toFixed(2)}
                </p>
                <p className="dark:text-green-400 text-xs">Your order qualifies for FREE Delivery.</p>
                <p className="dark:text-white text-xs">Select this option at checkout.</p>
                <p className="text-blue-600 underline text-xs">Delivery Details</p>

                <button 
                onClick={()=>{
                    navigate("/checkout")
                }}
                className="text-xs py-1 px-4 font-semibold dark:text-white border-1 dark:border-white rounded-lg mt-2 cursor-pointer">Go to basket</button>
            </div>

            <div className="space-y-4">
                {cartItems.map((item, index) => (
                    <div
                        key={`${item.title ?? item.name ?? "item"}-${index}`}
                        className="flex flex-col justify-center items-center gap-3 rounded-lg  dark:bg-gray-900 p-3"
                    >
                        <img
                            src={item.image}
                            alt={item.title || item.name || "Cart item"}
                            className="h-16 w-16 rounded object-cover"
                        />
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            R {Number(item.price ?? 0).toFixed(2)}
                        </p>
                        <span className="dark:text-white flex items-center justify-between gap-1 border-3 border-yellow-400 rounded-xl py-0 px-3 w-25">
                            <LuTrash
                                className="text-xs cursor-pointer font-bold"
                                onClick={() => {
                                    if (quantity > 0) {
                                        setQuantity(quantity - 1);
                                    } else if(quantity==0){
                                        removeFromCart(item.title)
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

                    </div>
                ))}
            </div>
        </aside>
    );
};

export default RightCartPanel;
