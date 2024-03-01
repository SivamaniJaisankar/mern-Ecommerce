import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <Link to={`product/${product.id}`}>
      <div className="shadow-xl rounded-sm my-4 mx-4 sm:mx-2 md:mx-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 mb-2 object-contain"
        />
        <h2 className="font-semibold text-center text-sm p-2">
          {product.name}
        </h2>
        <div className="flex justify-center p-2">
          <span className="text-yellow-400 font-semibold ml-2 mr-2">
            {product.rating}
          </span>
          <span className="font-thin">({product.numReviews} reviews)</span>
        </div>
        <h2 className="font-semibold text-center my-2">
          ${product.price.toFixed(2)}
        </h2>
      </div>
    </Link>
  );
}
