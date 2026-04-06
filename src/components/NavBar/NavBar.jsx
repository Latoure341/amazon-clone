import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import "./NavBar.css"
import { FaLocationDot, FaMagnifyingGlass, FaShop } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
    const navigate = useNavigate()

    const signInpage = () => {
        navigate("/login")
    }
  return (
    <nav>
        <div className='logo'>
            <img src="https://i.pinimg.com/originals/d4/9f/a3/d49fa3523c84bef766b4b2bde8296d23.jpg" alt="logo"
            height={20} width={30}/>
        </div>
        <div className='location'>
            <span className='location-text'>Delivering to Krugersdorp, 1754</span>
            <span className='location-update'>
                <FaLocationDot />
                Update you location
            </span>
        </div>
        <div className='input'>
            <select name="categories" id="categories">
                <option value="All">All</option>
                <option value="Alexa">Alexa</option>
                <option value="Amazon Pay">Amazon Pay</option> 
            </select>

            <input type="text" placeholder='Search Amazon'/>
            <FaMagnifyingGlass style={{color: "black", backgroundColor: "rgb(254,189,105)", padding: "0.5rem"}}/>
        </div>
        <div className='signIn' onClick={signInpage}>
            <span className='signIn-text'>Hello, Sign in</span>
            <span className='signIn-account'>Account & Lists</span>
        </div>
        <div className='ReturnsOrders'>
            <span className='returns'>Returns</span>
            <span className='orders'>& Orders</span>
        </div>
        <div className='cart'>
            <FaShoppingCart />
            <span>Cart</span>
        </div>
      </nav>
  )
}

export default NavBar
