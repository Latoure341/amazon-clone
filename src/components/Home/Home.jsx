import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <>
    <section className="absolute top-10 left-0 text-center h-screen w-screen z-[-100] overflow-x-hidden">
      <img src='https://m.media-amazon.com/images/I/71KOWlHgg-L._SX3000_.jpg' alt='background' className="w-full h-full"/>
    </section>
    
    {/* First section */}
    <section className='flex flex-wrap justify-center gap-4 mt-40 text-center'>
      <div className='bg-gray-200 p-2 flex flex-col gap-2'>
        <h3>Shop deals under R250</h3>

        <span className='flex gap-2'> 
          <span>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-40 h-40 object-cover'/>
            <p>Deals under R99 </p>
          </span>
          <span>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-40 h-40 object-cover'/>
            <p>Deals under R149 </p>
          </span>
        </span>

        <span className='flex gap-2'>
          <span>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-40 h-40 object-cover'/>
            <p>Deals under R199 </p>
          </span>
          <span>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg" alt="product" className='w-40 h-40 object-cover'/>
            <p>Deals under R249 </p>
          </span>
        </span>
        <a href="#" className='text-blue-500 p-1'>Shop Now</a>
      </div>
      <div className='bg-gray-200 p-2 flex '>
        
      </div>
      <div className='bg-gray-200 p-2'></div>
      <div className='bg-gray-200 p-2'></div>
      <div className='bg-gray-200 p-2'></div>
      <div className='bg-gray-200 p-2'></div>
      <div className='bg-gray-200 p-2'></div>
      <div className='bg-gray-200 p-2'></div>
    </section>
    </>
  )
}

export default Home
