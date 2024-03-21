import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartScreen() {
  const { cartItems, itemsPrice, taxPrice, shippingPrice, totalPrice } =
    useSelector((state) => state.cart);

  return (
    <div className="mt-5 md:flex">
      <div className="md:w-2/3 mx-1 my-5">
        <div className="text-gray-500 bg-slate-300 font-semibold shadow-2xl rounded-lg py-1">
          <h2 className="my-2 text-center font uppercase ">Shopping Cart</h2>
        </div>
        {cartItems.length !== 0 ? (
          <div className="mx-2 my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-200 shadow-xl w-96 mx-auto md:w-4/5 md:ml-2 my-2 rounded-md"
              >
                <img
                  className="w-36 h-36 object-contain mx-auto my-1"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="mt-4 text-center font-semibold">{item.name}</h2>
                <h6 className="mt-1 text-center">
                  <span className="font-semibold">Price:</span>
                  {item.price}
                </h6>
                <h6 className="mt-1 text-center">
                  <span className="font-semibold">Qty:</span>
                  {item.qty}
                </h6>
              </div>
            ))}
          </div>
        ) : (
          <p className=" text-gray-400 text-xl">Your Cart is empty.</p>
        )}
      </div>

      {cartItems.length !== 0 && (
        <div className=" md:w-1/3 mx-1 my-5">
          <div className="text-gray-500 bg-slate-300 font-semibold shadow-2xl rounded-lg py-1">
            <h2 className="my-2 text-center uppercase">Total Payment</h2>
          </div>

          <div className=" flex flex-col mx-2 sm:mx-24 md:mx-1">
            <h6 className=" mx-5 my-3 p-2 font-semibold text-gray-500 bg-slate-100 shadow-2xl flex justify-between pr-4">
              Total Items: <span className="text-slate-700">₹ 0.00</span>
            </h6>
            <h6 className=" mx-5 my-3 p-2 font-semibold text-gray-500 bg-slate-100 shadow-2xl flex justify-between pr-4">
              Items Price:{" "}
              <span className="text-slate-700">₹ {itemsPrice}</span>
            </h6>
            <h6 className=" mx-5 my-3 p-2 font-semibold text-gray-500 bg-slate-100 shadow-2xl flex justify-between pr-4">
              Tax Price: <span className="text-slate-700">₹ {taxPrice}</span>
            </h6>
            <h6 className=" mx-5 my-3 p-2 font-semibold text-gray-500 bg-slate-100 shadow-2xl flex justify-between pr-4">
              Shipping Price:{" "}
              <span className="text-slate-700">₹ {shippingPrice}</span>
            </h6>
            <h6 className=" mx-5 my-3 p-2 font-semibold text-gray-500 bg-slate-100 shadow-2xl flex justify-between pr-4">
              Total Price:{" "}
              <span className="text-slate-700">₹ {totalPrice}</span>
            </h6>
          </div>
          <Link>
            <div className="text-center mb-1 md:my-2">
              <button className="bg-yellow-400 mt-2 mb-1 py-1 px-5 font-medium uppercase text-white rounded-md hover:font-bold hover:bg-white hover:text-amber-400">
                Proceed To Payment
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
