import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-col items-center p-4 bg-white">
      <p className="no-underline text-black text-xl font-medium">{product.descrip}</p>
      <img src={product.image} alt={product.name} className="my-2"/>
      <Link to={`/products/${product.id}`} className="no-underline text-start p-1 text-blue-600 hover:text-orange-500">View Details</Link>
    </div>
  );
};

export default ProductDetails;
