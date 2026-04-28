import React from 'react'
import { Link } from 'react-router-dom'

import ProductDetails from './Product-details/ProductDetails'

const productList =[
  {id: 1, name: "product 1", price: "R10", image: "https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg", descrip: "Book Now"},
  {id: 2, name: "product 2", price: "R20", image: "https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg", descrip: "Book"},
  {id: 3, name: "product 3", price: "R30", image: "https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2026/Homepage/HP_Desktop_Single_Image_Card_Books-1._SY304_CB783593942_.jpg", descrip: "Book"},
]

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-40 text-center">
      {
        productList.map(product=> {
          return <ProductDetails key={product.id} product={product} />
        })
      }
      
    </div>
  )
}

export default Products
