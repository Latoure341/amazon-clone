import React from "react";
import { Link } from "react-router-dom";

import "./ProductDetails.css";

const ProductDetails = (props) => {
  const { product } = props;
  return (
    <div className="details">
      <p>{product.descrip}</p>
      <img src={product.image} alt={product.name} />
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductDetails;
