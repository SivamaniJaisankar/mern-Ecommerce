import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductScreen() {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  console.log(product);
  return (
    <div className="bg-slate-100 shadow-2xl rounded-md container mx-auto mt-4 p-8">
      <Link to={'/'}>
        <button className="bg-yellow-400 mb-1 p-1 font-medium uppercase text-white rounded-md hover:font-bold hover:bg-white hover:text-amber-400">
          Go Back
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-contain mt-8"
          />
        </div>
        <div className="bg-slate-200 shadow-2xl rounded-md">
          <h2 className="font-semibold text-xl mt-4 mx-2 p-1">
            {product.name}
          </h2>
          <p className="font-thin text-md mt-2 mx-2 p-1">
            {product.description}
          </p>
          <div className="flex justify-left mt-2 mx-1 p-2">
            <span className="text-amber-400 font-semibold mr-2">
              Rating: {product.rating}
            </span>
            <span className="font-thin">({product.numReviews} reviews)</span>
          </div>
          <h2 className="font-semibold text-left mt-2 mx-2 p-2">
            ${product.price.toFixed(2)}
          </h2>
          <p className="font-thin text-left mt-2 mx-2 p-2">
            In Stock: {product.countInStock}
          </p>
          <div className="flex mt-2 mx-2 p-2">
            <p className="font-thin mr-2">Quantity:</p>
            <select id="quantity" className="outline-none">
              {[...Array(product.countInStock).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <Link>
            <button className="bg-yellow-400 mt-2 mx-2 mb-1 p-1 font-medium uppercase text-white rounded-md hover:font-bold hover:bg-white hover:text-amber-400">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
