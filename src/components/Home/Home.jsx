import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <>
    <div className="absolute top-10 left-0 text-center h-screen w-screen z-[-100] overflow-x-hidden">
      <img src='https://m.media-amazon.com/images/I/71KOWlHgg-L._SX3000_.jpg' alt='background' className="w-full h-full"/>
    </div>
    <Products />
    </>
  )
}

export default Home
