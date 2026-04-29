import React from 'react'
import { PiAmazonLogo } from 'react-icons/pi'
import { GiSouthAfricaFlag } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";

const Home = () => {
  return (
    <>
      <section className="absolute top-10 left-0 text-center h-screen w-screen z-[-100] overflow-x-hidden">
        <img src='https://m.media-amazon.com/images/I/71KOWlHgg-L._SX3000_.jpg' alt='background' className="w-screen h-full" />
      </section>

      <section className='bg-[#232f3e] flex items-center gap-3 text-white w-4/5'>

        <span className='flex items-center gap-1 text-white font-bold p-2 cursor-pointer hover:border-1'>
          <IoIosMenu className='text-white'/>
          All
        </span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Customer Service</span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Today's Deals</span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Keep Shopping For</span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Everyday Essentials</span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Best Sellers</span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Shop Mzansi</span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Gift Cards</span>
        <span className='text-sm font-bold p-2 cursor-pointer hover:border-1'>Sell</span>
      </section>

      {/* First section */}
      <section className='flex flex-wrap justify-center gap-4 mt-40 text-center'>

        <div className='bg-gray-200 p-2 flex flex-col gap-2'>
          <h3>Shop deals under R250</h3>

          <span className='flex gap-2'>
            <span>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-30 h-30 object-cover' />
              <p>Deals under R99 </p>
            </span>
            <span>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-30 h-30 object-cover' />
              <p>Deals under R149 </p>
            </span>
          </span>

          <span className='flex gap-2'>
            <span>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-30 h-30 object-cover' />
              <p>Deals under R199 </p>
            </span>
            <span>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-30 h-30 object-cover' />
              <p>Deals under R249 </p>
            </span>
          </span>
          <a href="#" className='text-blue-500 p-1'>Shop Now</a>
        </div>

        <div className='bg-gray-200 p-2 flex flex-col gap-2'>
          <h3>Extra 10% off selected items</h3>
          <img className='p-2' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BigSmileSale/extra_10__CC0.5x._SY304_CB781781918_.jpg'
            height={300} width={300} />
          <a href="#" className='text-blue-500 p-1'>Shop Now</a>
        </div>
        <div className='bg-gray-200 p-2 flex flex-col gap-2'>
          <h3 className='font-bold'>Deals on Baby Products</h3>
          <img className='m-2' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Payday/BAby_CC_DT0.5x._SY304_CB787423716_.jpg'
            height={300} width={300} />
          <a href="#" className='text-blue-500 p-1'>Shop Now</a>
        </div>
        <div className='p-2 flex flex-col gap-2'>
          <span className='bg-gray-200 mb-2 py-2 flex flex-col items-start'>
            <h3 className='font-bold mb-2 ps-2'>Sign in for your best experience</h3>
            <button className='bg-yellow-400 py-1 px-4 rounded mb-2 ms-2'>Sign In securely</button>
          </span>
          <span className='p-2'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/NTA_RNP/NTA_Adtopper_-_PAY_._CB771828809_.jpg'
              height={300} width={300} />
          </span>
        </div>

        <div className='bg-gray-200 p-2 flex flex-col gap-2'>
          <h3 className='font-bold'>Deals on Electronics</h3>
          <img className='m-2' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Payday/electrojnics_CC_DT0.5x._SY304_CB787423716_.jpg'
            height={300} width={250} />
          <a href="#" className='text-blue-500 p-1'>Shop Now</a>
        </div>
        <div className='bg-gray-200 p-2 flex flex-col gap-2'>
          <h3 className='font-bold'>Shop Star Wars essentials</h3>
          <img className='m-2' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Abigail/Star-Wars_HP-Desktop-Category-Card-379x304._SY304_CB780326028_.jpg'
            height={300} width={250} />
          <a href="#" className='text-blue-500 p-1'>Discover More</a>
        </div>
        <div className='bg-gray-200 p-2 flex flex-col gap-2'>
          <h3 className='font-bold flex flex-wrap'>Skincare Essentials | Under R149</h3>
          <img className='m-2' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/6cards/skincare_cc0.5x._SY304_CB782353703_.jpg'
            height={300} width={250} />
          <a href="#" className='text-blue-500 p-1'>Discover More</a>
        </div>

        <div className='bg-gray-200 p-2 flex flex-col gap-2'>
          <h3 className='font-bold'>One brand. Every connection | Unitek</h3>
          <img className='m-2' src='https://images-eu.ssl-images-amazon.com/images/G/53/Amazon.za/Brand_week/2026/Co-op_-_Safe_Zones_UnitekCategory_Card_379x304._SY304_CB781855358_.jpg'
            height={300} width={250} />
          <a href="#" className='text-blue-500 p-1'>Shop Now</a>
        </div>
      </section>

      {/* Second Section */}
      <section className='bg-orange-500 flex flex-col p-4 gap-2 mt-10 mx-4'>
        <span className='flex gap-5'>
          <h3 className='font-bold text-white'>Welcome Deals</h3>
          <a href='#' className='text-white'>See more</a>
        </span>
        <p className='text-white'>Free delivery on items shipped by Amazon</p>
        <div className='flex flex-wrap gap-2 items-center'>

          <span className='bg-gray-200 p-3 rounded flex flex-col items-center'>
            <img src='https://m.media-amazon.com/images/I/416A281tv+L._AC_SR480,440_.jpg'
            height={200} width={200}/>
            <div className=''>
              <p className='text-sm'>Oros Squash Orange 2L, Tartrazine-..</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>35% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p>R31.00</p>
            </div>
          </span>

          <span className='bg-gray-200 p-3 rounded flex flex-col items-center'>
            <img src='https://m.media-amazon.com/images/I/41K+4N+xlDL._AC_SR480,440_.jpg'
            height={200} width={200}/>
            <div className=''>
              <p className='text-sm'>Astrum Ultra-High Capacity 2000..</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>43% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p>R199.00</p>
            </div>
          </span>

          <span className='bg-gray-200 p-3 rounded flex flex-col items-center'>
            <img src='https://m.media-amazon.com/images/I/41bkFteukKL._AC_SR480,440_.jpg'
            height={200} width={200}/>
            <div className=''>
              <p className='text-sm'>Nescafe Expresso Blonde Instan..</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>22% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p>R126.00</p>
            </div>
          </span>


          <span className='bg-gray-200 p-3 rounded flex flex-col items-center'>
            <img src='https://m.media-amazon.com/images/I/41FLDePLa4L._AC_SR480,440_.jpg'
            height={200} width={200}/>
            <div className=''>
              <p className='text-sm'>Redbull Energy Drink 250ml (12 pack)</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>31% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p>R159.00</p>
            </div>
          </span>

          <span className='bg-gray-200 p-3 rounded flex flex-col items-center'>
            <img src='https://m.media-amazon.com/images/I/41b1nJAlbdL._AC_SR480,440_.jpg'
            height={200} width={200}/>
            <div className=''>
              <p className='text-sm'>Tastic Preboiled Rice 5kg</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>51% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p>R78.00</p>
            </div>
          </span>

        </div>
      </section>

      {/* Third Section */}
      <section className='bg-gray-200 mt-10 mx-4 p-2'>
        <h3 className='text-black text-lg font-bold'>Welcome to Amazon</h3>
        <div className='flex gap-3 p-2'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Free_Delivery_0.5x._CB778020995_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Pickup_location0.5x._CB778020995_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Order_Tracking0.5x._CB778020995_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Easy_Returns0.5x._CB778020995_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Guarantee0.5x._CB778020995_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Customer_Supp0.5x._CB778020995_.jpg"
          />
        </div>
      </section>

      {/* Fourth Section */}
      <section className='bg-gray-200 mt-10 mx-4 p-2'>
        <h3 className='text-black text-xl font-bold p-2'>Shop our categories</h3>
        <div className='flex gap-3 p-2'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Deals_Spring_shovelor_Lowres._CB564592108_.jpg"
          width={200}/>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Books_Spring_shovelor_Lowres._CB564592108_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Electronics_Spring_shovelor_lowres._CB564592108_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/HPC_Spring_shovelor_Hires0.5x._CB799931608_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Jewellery_Spring_shovelor_Lowres._CB564592108_.jpg"
          />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Toys_and_Games_Spring_shovelor_Lowres._CB564592108_.jpg"
          />
        </div>
      </section>

      {/* Fifth Section */}
      <section className='bg-gray-200 mt-20 mx-4 p-2 flex flex-col justify-center items-center border-top-1 border-gray-500'>
        <p className='font-bold text-black'>See personalised recommendations</p>
        <button className='bg-yellow-500 py-1 px-5 rounded mb-0 mt-5' type='button'>Sign In</button>
        <span className='flex justify-center items-start gap-1 mt-1'>
          <p className='text-xs'>New Customer? </p>
          <a className='text-blue-600 text-xs' href='#'>Start here</a>
        </span>
      </section>

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
          <div className='flex justify-center items-center gap-20 mt-5'>
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

export default Home
