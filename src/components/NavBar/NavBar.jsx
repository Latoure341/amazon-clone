import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { FaLocationDot, FaMagnifyingGlass, FaShop } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
    const navigate = useNavigate()

    const signInpage = () => {
        navigate("/login")
    }
  return (
    <nav className="flex w-full h-14 gap-9 justify-center items-center m-0 p-1 bg-[#131921] text-white overflow-y-hidden">
        <div className='logo cursor-pointer'>
            <img src="https://i.pinimg.com/originals/d4/9f/a3/d49fa3523c84bef766b4b2bde8296d23.jpg" alt="logo"
            height={20} width={30}/>
        </div>
        <div className='location flex flex-col gap-1 cursor-pointer p-1'>
            <span className='text-xs cursor-pointer'>Delivering to Krugersdorp, 1754</span>
            <span className='text-base cursor-pointer flex items-center'>
                <FaLocationDot />
                Update you location
            </span>
        </div>
        <div className='input flex items-center bg-white text-black cursor-pointer'>
            <select name="categories" id="categories" className="border-none outline-none w-14 p-2 cursor-pointer">
                <option value="All">All</option>
                <option value="Alexa">Alexa</option>
                <option value="Amazon Pay">Amazon Pay</option> 
            </select>

            <input type="text" placeholder='Search Amazon' className="outline-none border-none w-[35rem] p-0 cursor-pointer"/>
            
            <span className='bg-orange-300 p-3 m-0'>
                <FaMagnifyingGlass className='text-xl text-current m-0 p-0'/>    
            </span>
        </div>
        <div className='signIn flex flex-col gap-1 cursor-pointer p-1' onClick={signInpage}>
            <span className='text-xs cursor-pointer'>Hello, Sign in</span>
            <span className='text-base cursor-pointer'>Account & Lists</span>
        </div>
        <div className='ReturnsOrders flex flex-col gap-1 cursor-pointer p-1'>
            <span className='text-sm cursor-pointer'>Returns</span>
            <span className='text-sm cursor-pointer'>& Orders</span>
        </div>
        <div className='cart flex items-center cursor-pointer hover:border hover:border-white hover:rounded-sm p-1'>
            <FaShoppingCart />
            <span>Cart</span>
        </div>
      </nav>
  )
}

export default NavBar
