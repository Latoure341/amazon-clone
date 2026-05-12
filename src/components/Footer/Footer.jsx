import React from 'react'
import { PiAmazonLogo } from 'react-icons/pi'
import { GiSouthAfricaFlag } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <footer className='mt-20 p-0 flex flex-col items-center'>
        <span className='bg-[#37475a] text-white py-2 px-4 w-full text-center cursor-pointer'>
          Back to top
        </span>

        <div className='flex flex-wrap gap-30 bg-[#232f3e] pt-10 w-full justify-center'>

          <span className='flex flex-col'>
            <h3 className='text-white font-bold mb-2'>Get to Know Us</h3>
            <ul className='text-white text-sm flex flex-col gap-2'>
              <li>Careers</li>
              <li>Legal Notice</li>
              <li>Welcome to Amazon.co.za</li>
            </ul>
          </span>
          <span className='flex flex-col'>
            <h3 className='text-white font-bold mb-2'>Make Money with Us</h3>
            <ul className='text-white text-sm flex flex-col gap-2'>
              <li>Advertise Your Products</li>
              <li>Sell on Amazon</li>
              <li>Supply to Amazon</li>
            </ul>
          </span>
          <span className='flex flex-col'>
            <h3 className='text-white font-bold mb-2'>Amazon Payment Methods</h3>
            <ul className='text-white text-sm flex flex-col gap-2'>
              <li>Payment Methods Help</li>
            </ul>
          </span>
          <span className='flex flex-col'>
            <h3 className='text-white font-bold mb-2'>Let Us Help You</h3>
            <ul className='text-white text-sm flex flex-col gap-2'>
              <li>Track Packages or View Orders</li>
              <li>Shipping & Delivery</li>
              <li>Returns and Replacements</li>
              <li>Recalls and Product Safety Alerts</li>
              <li>Customer Service</li>
              <li>Amazon Mobile App</li>
            </ul>
          </span>

          <span className='my-5 mx-0 p-5 flex justify-center items-center gap-3 border-t-1 border-gray-500 w-full'>
            <PiAmazonLogo className='text-white font-bold'/>
            <button className='text-white py-1 px-3 rounded border-1 flex items-center gap-1' type='button'>
              <GiSouthAfricaFlag/>
              South Africa
              </button>
          </span>
        </div>

        <div className='flex flex-col gap-5 bg-[#131a22] text-white py-2 px-4 w-full text-center'>
          <div className='flex flex-wrap w-full justify-center items-center gap-15 mt-5'>
            <span className='text-start'>
              <h3 className='text-white text-sm font-bold'>Amazon Advertising</h3>
              <a className='text-gray-300 text-xs'>Find, attract and engage customers</a>
            </span>
            <span className='text-start'>
              <h3 className='text-white text-sm font-bold'>Amazon Advertising</h3>
              <a className='text-gray-300 text-xs'>Find, attract and engage customers</a>
            </span>
            <span className='text-start'>
              <h3 className='text-white text-sm font-bold'>Amazon Advertising</h3>
              <a className='text-gray-300 text-xs'>Find, attract and engage customers</a>
            </span>
            <span className='text-start'>
              <h3 className='text-white text-sm font-bold'>Amazon Advertising</h3>
              <a className='text-gray-300 text-xs'>Find, attract and engage customers</a>
            </span>
          </div>

          <div className='flex justify-center items-center p-5 w-full'>
            <ul className='text-white text-xs flex gap-3 flex-wrap justify-center w-3/5'>
              <li>Conditions of Use & Sale</li>
              <li>Privacy Notice</li>
              <li>Cookies Notice</li>
              <li>Legal Notice</li>
              <li>Interst-based ad Notice</li>
              <li>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
