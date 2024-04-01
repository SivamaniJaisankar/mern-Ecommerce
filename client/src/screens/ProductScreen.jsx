import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../app/slices/productApiSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { addToCart } from "../app/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProductScreen() {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(productId);
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <div className="bg-slate-100 shadow-2xl rounded-md container mx-auto mt-4 p-8">
      <Link to={"/"}>
        <button className="px-3 py-1 outline-none border-none bg-yellow-400 mb-1 font-medium uppercase text-white rounded-sm hover:shadow-md hover:shadow-amber-500">
          Go Back
        </button>
      </Link>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : isError ? (
        toast.error(isError?.data?.message)
      ) : (
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
              ₹{product.price?.toFixed(2)}
            </h2>
            <p className="font-thin text-left mt-2 mx-2 p-2">
              In Stock: {product.countInStock}
            </p>
            <div className="flex mt-2 mx-2 p-2">
              <p className="font-thin mr-2">Quantity:</p>
              <select
                id="quantity"
                className="outline-none"
                onChange={(e) => setQty(e.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <Link>
              <button
                className="px-3 py-1 bg-yellow-400 mt-2 mx-2 mb-4 font-medium uppercase text-white rounded-sm hover:shadow-md hover:shadow-amber-500"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
