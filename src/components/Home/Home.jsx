import React from 'react'
import "./Home.css"
import Products from '../Products/Products'

const Home = () => {
  return (
    <>
    <div className='home'>
      <img src='https://m.media-amazon.com/images/I/71KOWlHgg-L._SX3000_.jpg' alt='background'/>
    </div>
    <Products />
    </>
  )
}

export default Home
