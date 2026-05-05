import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const Checkout = () => {
    const [freeDelivery, setFreeDelivery] = useState(false);
    const products = JSON.parse(localStorage.getItem("cart"));

    const checkCost = () => {
      const total = products.map(item =>{
            item.price ++
        })
        if ( total === 500) {
            setFreeDelivery(true);
        }
    }

    return (
        <div className='flex w-screen w-5/6'>
            <section>
                <NavBar />
                <div className='p-2'>
                    {
                        products.map(item => {
                            <div className='flex gap-2 items-center'>
                                <span className='bg-white p-5 flex items-center gap-2'>
                                    <img src={item.image} className='w-10 h-10' />
                                    <p className='text-black font-extrabold'>Added to basket</p>
                                </span>
                                <span>
                                    {
                                        freeDelivery ? <p>Your order qualifies for FREE Delivery.</p>
                                            : <p>Shipping fee is R100</p>
                                    }
                                    <p>Select this option at checkout.</p>
                                    <a href='#'>Delivery Detail</a>
                                </span>
                            </div>
                        })
                    }
                </div>
                <Footer />
            </section>

            <aside className='z-100 shadow-xl flex flex-col gap-2 items-center text-xs w-1/6'>

                <span className='p-1 mt-3 border-b-1 border-gray-300 text-center'>
                    <h6 className=''>Subtotal</h6>
                    <p className='text-red-600 mb-1' onChange={checkCost}>R 24 998.00</p>
                    {
                        freeDelivery ? <p className='mb-1'>Your order qualifies for FREE Delivery.</p>
                            : <p className='mb-1'>Shipping fee is R100</p>
                    }
                    <p>Select this option at checkout.</p>
                    <a href='#'>Delivery Detail</a>
                    <button className='rounded-xl p-1 text-xs'>Go to basket</button>
                </span>

                <span className='p-1 mt-3 flex flex-col border-b-1 border-gray-300'>
                    <img src='#'
                        className='w-10 h-10' />
                    <p>R12 000</p>
                    <p>Quantity Container</p>
                </span>
            </aside>

        </div>
    )
}

export default Checkout
