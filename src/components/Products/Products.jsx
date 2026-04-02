import React from 'react'
import { Link } from 'react-router-dom'
import "./Products.css"

const Products = () => {
  return (
    <div className='products'>
      <h1>Product List</h1>
      <ul>
        <li><Link to="/productDetails/:1">Product 1</Link></li>
        <li><Link to="/productDetails/:2">Product 2</Link></li>
        <li><Link to="/productDetails/:3">Product 3</Link></li>
      </ul>
    </div>
  )
}

export default Products
