import React from 'react'
import { useParams } from 'react-router-dom'

import "./ProductDetails.css"

const ProductDetails = () => {
    const params = useParams()

  return (
    <div className='details'>
      <h1>Product Details</h1>
      
      <span>{params.id}</span>
      
    </div>
  )
}

export default ProductDetails
