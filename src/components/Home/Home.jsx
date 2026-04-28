import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <>
      <section className="absolute top-10 left-0 text-center h-screen w-screen z-[-100] overflow-x-hidden">
        <img src='https://m.media-amazon.com/images/I/71KOWlHgg-L._SX3000_.jpg' alt='background' className="w-full h-full" />
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
      <section className='bg-orange-500 flex flex-col p-4 gap-2 mt-10'>
        <span className='flex gap-5'>
          <h3 className='font-bold text-white'>Welcome Deals</h3>
          <a href='#' className='text-white'>See more</a>
        </span>
        <p className='text-white'>Free delivery on items shipped by Amazon</p>
        <div className='flex flex-wrap'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  )
}

export default Home
