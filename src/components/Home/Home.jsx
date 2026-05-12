import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer.jsx";
import NavBar from '../NavBar/NavBar.jsx';

const Home = () => {
  return (
    <>
    <NavBar />
      <section className="absolute top-10 left-0 z-[-100] h-screen min-h-0 w-screen min-w-0 overflow-x-hidden text-center">
        <img src='https://m.media-amazon.com/images/I/71KOWlHgg-L._SX3000_.jpg' alt='background' className="h-full w-full max-w-full object-cover object-center" />
      </section>

      {/* First section */}
      <section className='mt-32 grid min-w-0 grid-cols-1 justify-items-center gap-4 px-3 text-center sm:mt-36 sm:grid-cols-2 sm:px-4 md:mt-40 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-4'>

        <div className='flex min-w-0 w-full max-w-full flex-col gap-3 bg-gray-200 p-3 dark:bg-gray-700 sm:p-3 md:p-4'>
          <h3 className='text-sm font-semibold sm:text-base md:text-lg'>Shop deals under R250</h3>

          <span className='flex justify-center gap-2 sm:justify-center'>
            <span className='min-w-0'>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='mx-auto aspect-square h-auto w-full max-h-28 max-w-[min(100%,7.5rem)] object-cover sm:max-h-32 sm:max-w-[min(100%,8rem)]' />
              <p className='text-xs sm:text-sm'>Deals under R99 </p>
            </span>
            <span className='min-w-0'>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='mx-auto aspect-square h-auto w-full max-h-28 max-w-[min(100%,7.5rem)] object-cover sm:max-h-32 sm:max-w-[min(100%,8rem)]' />
              <p className='text-xs sm:text-sm'>Deals under R149 </p>
            </span>
          </span>

          <span className='flex justify-center gap-2 sm:justify-start'>
            <span className='min-w-0'>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='mx-auto aspect-square h-auto w-full max-h-28 max-w-[min(100%,7.5rem)] object-cover sm:max-h-32 sm:max-w-[min(100%,8rem)]' />
              <p className='text-xs sm:text-sm'>Deals under R199 </p>
            </span>
            <span className='min-w-0'>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='mx-auto aspect-square h-auto w-full max-h-28 max-w-[min(100%,7.5rem)] object-cover sm:max-h-32 sm:max-w-[min(100%,8rem)]' />
              <p className='text-xs sm:text-sm'>Deals under R249 </p>
            </span>
          </span>
          <a href="#" className='text-xs text-blue-500 p-1 sm:text-sm'>Shop Now</a>
        </div>

        <div className='flex min-w-0 w-full max-w-full flex-col gap-2 bg-gray-200 p-2 dark:bg-gray-700 sm:p-3 md:p-4'>
          <h3 className='text-sm font-semibold sm:text-base md:text-lg'>Extra 10% off selected items</h3>
          <img className='mx-auto h-auto w-full max-h-48 max-w-full object-contain p-2 sm:max-h-56 md:max-h-64' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BigSmileSale/extra_10__CC0.5x._SY304_CB781781918_.jpg'
            height={300} width={300} />
          <a href="#" className='text-xs text-blue-500 p-1 sm:text-sm'>Shop Now</a>
        </div>
        <div className='flex min-w-0 w-full max-w-full flex-col gap-2 bg-gray-200 p-2 sm:p-3 md:p-4'>
          <h3 className='text-sm font-bold sm:text-base md:text-lg'>Deals on Baby Products</h3>
          <img className='mx-auto m-2 h-auto w-full max-h-48 max-w-full object-contain sm:max-h-56 md:max-h-64' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Payday/BAby_CC_DT0.5x._SY304_CB787423716_.jpg'
            height={300} width={300} />
          <a href="#" className='text-xs text-blue-500 p-1 sm:text-sm'>Shop Now</a>
        </div>
        <div className='flex min-w-0 w-full max-w-full flex-col gap-2 p-2 sm:p-3 md:p-4'>
          <span className='mb-2 flex flex-col items-start bg-gray-200 py-2'>
            <h3 className='mb-2 ps-2 text-sm font-bold sm:text-base md:text-lg'>Sign in for your best experience</h3>
            <button className='mb-2 ms-2 rounded bg-yellow-400 px-4 py-1 text-xs sm:text-sm'>Sign In securely</button>
          </span>
          <span className='p-2'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/NTA_RNP/NTA_Adtopper_-_PAY_._CB771828809_.jpg'
              className='mx-auto h-auto w-full max-h-56 max-w-full object-contain sm:max-h-64 md:max-h-72'
              height={300} width={300} />
          </span>
        </div>

        <div className='flex min-w-0 w-full max-w-full flex-col gap-2 bg-gray-200 p-2 sm:p-3 md:p-4'>
          <h3 className='text-sm font-bold sm:text-base md:text-lg'>Deals on Electronics</h3>
          <img className='mx-auto m-2 h-auto w-full max-h-48 max-w-full object-contain sm:max-h-56 md:max-h-64' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Payday/electrojnics_CC_DT0.5x._SY304_CB787423716_.jpg'
            height={300} width={250} />
          <Link to="/productlist" className='text-xs text-blue-500 p-1 sm:text-sm'>Shop Now</Link>
        </div>
        <div className='flex min-w-0 w-full max-w-full flex-col gap-2 bg-gray-200 p-2 sm:p-3 md:p-4'>
          <h3 className='text-sm font-bold sm:text-base md:text-lg'>Shop Star Wars essentials</h3>
          <img className='mx-auto m-2 h-auto w-full max-h-48 max-w-full object-contain sm:max-h-56 md:max-h-64' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Abigail/Star-Wars_HP-Desktop-Category-Card-379x304._SY304_CB780326028_.jpg'
            height={300} width={250} />
          <a href="#" className='text-xs text-blue-500 p-1 sm:text-sm'>Discover More</a>
        </div>
        <div className='flex min-w-0 w-full max-w-full flex-col gap-2 bg-gray-200 p-2 sm:p-3 md:p-4'>
          <h3 className='flex flex-wrap text-sm font-bold sm:text-base md:text-lg'>Skincare Essentials | Under R149</h3>
          <img className='mx-auto m-2 h-auto w-full max-h-48 max-w-full object-contain sm:max-h-56 md:max-h-64' src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/6cards/skincare_cc0.5x._SY304_CB782353703_.jpg'
            height={300} width={250} />
          <a href="#" className='text-xs text-blue-500 p-1 sm:text-sm'>Discover More</a>
        </div>

        <div className='flex min-w-0 w-full max-w-full flex-col gap-2 bg-gray-200 p-2 sm:p-3 md:p-4'>
          <h3 className='text-sm font-bold sm:text-base md:text-lg'>One brand. Every connection | Unitek</h3>
          <img className='mx-auto m-2 h-auto w-full max-h-48 max-w-full object-contain sm:max-h-56 md:max-h-64' src='https://images-eu.ssl-images-amazon.com/images/G/53/Amazon.za/Brand_week/2026/Co-op_-_Safe_Zones_UnitekCategory_Card_379x304._SY304_CB781855358_.jpg'
            height={300} width={250} />
          <a href="#" className='text-xs text-blue-500 p-1 sm:text-sm'>Shop Now</a>
        </div>
      </section>

      {/* Second Section */}
      <section className='mx-2 mt-10 flex min-w-0 flex-col gap-2 overflow-x-hidden bg-orange-500 p-3 sm:mx-4 sm:p-4 md:p-5'>
        <span className='flex flex-wrap items-center gap-3 gap-x-5 sm:gap-5'>
          <h3 className='text-base font-bold text-white sm:text-lg md:text-xl'>Welcome Deals</h3>
          <a href='#' className='text-sm text-white sm:text-base'>See more</a>
        </span>
        <p className='text-sm text-white sm:text-base'>Free delivery on items shipped by Amazon</p>
        <div className='grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>

          <span className='flex min-w-0 w-full flex-col items-center rounded bg-gray-200 p-2 sm:p-3'>
            <img src='https://m.media-amazon.com/images/I/416A281tv+L._AC_SR480,440_.jpg'
            className='mx-auto h-auto w-full max-h-40 max-w-[12rem] object-contain sm:max-h-44 md:max-h-48'
            height={200} width={200}/>
            <div className='min-w-0 w-full'>
              <p className='text-xs text-black sm:text-sm'>Oros Squash Orange 2L, Tartrazine-..</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>35% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p className='text-sm font-medium sm:text-base'>R31.00</p>
            </div>
          </span>

          <span className='flex min-w-0 w-full flex-col items-center rounded bg-gray-200 p-2 sm:p-3'>
            <img src='https://m.media-amazon.com/images/I/41K+4N+xlDL._AC_SR480,440_.jpg'
            className='mx-auto h-auto w-full max-h-40 max-w-[12rem] object-contain sm:max-h-44 md:max-h-48'
            height={200} width={200}/>
            <div className='min-w-0 w-full'>
              <p className='text-xs text-black sm:text-sm'>Astrum Ultra-High Capacity 2000..</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>43% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p className='text-sm font-medium sm:text-base'>R199.00</p>
            </div>
          </span>

          <span className='flex min-w-0 w-full flex-col items-center rounded bg-gray-200 p-2 sm:p-3'>
            <img src='https://m.media-amazon.com/images/I/41bkFteukKL._AC_SR480,440_.jpg'
            className='mx-auto h-auto w-full max-h-40 max-w-[12rem] object-contain sm:max-h-44 md:max-h-48'
            height={200} width={200}/>
            <div className='min-w-0 w-full'>
              <p className='text-xs text-black sm:text-sm'>Nescafe Expresso Blonde Instan..</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>22% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p className='text-sm font-medium sm:text-base'>R126.00</p>
            </div>
          </span>


          <span className='flex min-w-0 w-full flex-col items-center rounded bg-gray-200 p-2 sm:p-3'>
            <img src='https://m.media-amazon.com/images/I/41FLDePLa4L._AC_SR480,440_.jpg'
            className='mx-auto h-auto w-full max-h-40 max-w-[12rem] object-contain sm:max-h-44 md:max-h-48'
            height={200} width={200}/>
            <div className='min-w-0 w-full'>
              <p className='text-xs text-black sm:text-sm'>Redbull Energy Drink 250ml (12 pack)</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>31% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p className='text-sm font-medium sm:text-base'>R159.00</p>
            </div>
          </span>

          <span className='flex min-w-0 w-full flex-col items-center rounded bg-gray-200 p-2 sm:p-3'>
            <img src='https://m.media-amazon.com/images/I/41b1nJAlbdL._AC_SR480,440_.jpg'
            className='mx-auto h-auto w-full max-h-40 max-w-[12rem] object-contain sm:max-h-44 md:max-h-48'
            height={200} width={200}/>
            <div className='min-w-0 w-full'>
              <p className='text-xs text-black sm:text-sm'>Tastic Preboiled Rice 5kg</p>
              <span className='flex items-center gap-2'>
                <button className='p-1 text-xs text-white bg-pink-800 hover:bg-pink-900 rounded' type='button'>51% off </button>
                <p className='text-xs text-pink-600 font-bold'>Limited time deal</p>
              </span>
              <p className='text-sm font-medium sm:text-base'>R78.00</p>
            </div>
          </span>

        </div>
      </section>

      {/* Third Section */}
      <section className='mx-2 mt-10 min-w-0 overflow-x-hidden bg-gray-200 p-2 sm:mx-4 sm:p-3 md:p-4'>
        <h3 className='text-base font-bold text-black sm:text-lg md:text-xl'>Welcome to Amazon</h3>
        <div className='grid min-w-0 grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6'>
          <img className='mx-auto h-auto w-full max-h-24 max-w-full object-contain sm:max-h-28 md:max-h-32' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Free_Delivery_0.5x._CB778020995_.jpg"
          />
          <img className='mx-auto h-auto w-full max-h-24 max-w-full object-contain sm:max-h-28 md:max-h-32' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Pickup_location0.5x._CB778020995_.jpg"
          />
          <img className='mx-auto h-auto w-full max-h-24 max-w-full object-contain sm:max-h-28 md:max-h-32' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Order_Tracking0.5x._CB778020995_.jpg"
          />
          <img className='mx-auto h-auto w-full max-h-24 max-w-full object-contain sm:max-h-28 md:max-h-32' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Easy_Returns0.5x._CB778020995_.jpg"
          />
          <img className='mx-auto h-auto w-full max-h-24 max-w-full object-contain sm:max-h-28 md:max-h-32' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Guarantee0.5x._CB778020995_.jpg"
          />
          <img className='mx-auto h-auto w-full max-h-24 max-w-full object-contain sm:max-h-28 md:max-h-32' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BFCM2025/aboutamazon/Customer_Supp0.5x._CB778020995_.jpg"
          />
        </div>
      </section>

      {/* Fourth Section */}
      <section className='mx-2 mt-10 min-w-0 overflow-x-hidden bg-gray-200 p-2 sm:mx-4 sm:p-3 md:p-4'>
        <h3 className='p-2 text-lg font-bold text-black sm:text-xl md:text-2xl'>Shop our categories</h3>
        <div className='grid min-w-0 grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6'>
          <img className='mx-auto h-auto w-full max-w-full object-contain max-h-[min(12rem,40vw)] sm:max-h-48 md:max-h-52' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Deals_Spring_shovelor_Lowres._CB564592108_.jpg"
          width={200}/>
          <img className='mx-auto h-auto w-full max-w-full object-contain max-h-[min(12rem,40vw)] sm:max-h-48 md:max-h-52' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Books_Spring_shovelor_Lowres._CB564592108_.jpg"
          />
          <img className='mx-auto h-auto w-full max-w-full object-contain max-h-[min(12rem,40vw)] sm:max-h-48 md:max-h-52' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Electronics_Spring_shovelor_lowres._CB564592108_.jpg"
          />
          <img className='mx-auto h-auto w-full max-w-full object-contain max-h-[min(12rem,40vw)] sm:max-h-48 md:max-h-52' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/HPC_Spring_shovelor_Hires0.5x._CB799931608_.jpg"
          />
          <img className='mx-auto h-auto w-full max-w-full object-contain max-h-[min(12rem,40vw)] sm:max-h-48 md:max-h-52' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Jewellery_Spring_shovelor_Lowres._CB564592108_.jpg"
          />
          <img className='mx-auto h-auto w-full max-w-full object-contain max-h-[min(12rem,40vw)] sm:max-h-48 md:max-h-52' src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/SpringRefresh/BubbleShoveler/Toys_and_Games_Spring_shovelor_Lowres._CB564592108_.jpg"
          />
        </div>
      </section>

      {/* Fifth Section */}
      <section className='mx-2 mt-20 flex min-w-0 flex-col items-center justify-center overflow-x-hidden border-top-1 border-gray-500 bg-gray-200 p-2 sm:mx-4 sm:p-3 md:p-4'>
        <p className='text-center text-sm font-bold text-black sm:text-base md:text-lg'>See personalised recommendations</p>
        <button className='mt-5 mb-0 rounded bg-yellow-500 px-5 py-1 text-sm sm:text-base' type='button'>Sign In</button>
        <span className='mt-1 flex flex-wrap items-start justify-center gap-1'>
          <p className='text-xs sm:text-sm'>New Customer? </p>
          <a className='text-xs text-blue-600 sm:text-sm' href='#'>Start here</a>
        </span>
      </section>

      <Footer />
    </>
  )
}

export default Home
