import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function Header() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="bg-cyan-800">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center p-2">
          <Link>
            <h2 className="text-white font-semibold uppercase cursor-pointer mr-2 hover:font-bold">
              Tech Products
            </h2>
          </Link>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 mr-2 text-md text-gray-400 border-none bg-gray-200 rounded-sm hidden sm:block outline-none hover:shadow-md hover:shadow-blue-100"
            />
            <button
              type="submit"
              className="px-6 py-1 outline-none border-none bg-blue-400 text-white uppercase font-semibold rounded-sm hidden sm:block hover:shadow-md hover:shadow-blue-100"
            >
              Search
            </button>
          </div>
        </div>
        <div className="hidden p-3 md:flex items-center">
          <div className="text-white font-semibold uppercase cursor-pointer mr-3 hover:font-bold">
            <Link to="/cart" className="flex items-center">
              <FiShoppingCart className="mr-1" />
              Cart
              {cartItems.length !== 0 && (
                <span className="bg-blue-400 text-white rounded-full px-2">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
          <div className="text-white font-semibold cursor-pointer mr-3 hover:font-bold">
            <button
              onClick={() => setProfileMenu(!profileMenu)}
              className="flex items-center relative uppercase"
            >
              <FiUser className="mr-1" />
              Profile
            </button>
            <ul
              className={`absolute ${
                profileMenu ? "block" : "hidden"
              } bg-cyan-800 text-white font-semibold uppercase cursor-pointer p-2 mt-4 rounded-xl`}
            >
              <li>
                <Link className="flex mb-2 hover:font-bold">
                  <FiUser className="mr-2" />
                  View Profile
                </Link>
              </li>
              <li>
                <Link className="flex mb-2 hover:font-bold">
                  <FiLogOut className="mr-2" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white font-semibold uppercase cursor-pointer mr-3 hover:font-bold">
            <Link>Sign In</Link>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="relative text-white font-semibold text-xl hover:font-bold hover:shadow-xl hover:shadow-blue-100"
          >
            ☰
          </button>
        </div>
      </div>

      {/* .......MOBILE MENU.......
       */}

      {mobileMenu && (
        <div className="mt-4">
          <Link
            to="/cart"
            className="flex text-white text-md font-semibold mb-2 uppercase cursor-pointer hover:font-bold"
          >
            <FiShoppingCart className="mr-1" />
            Cart
            <span className="bg-blue-400 text-white rounded-full px-2">
              {cartItems.length}
            </span>
          </Link>
          <div className="text-white font-semibold uppercase cursor-pointer ml-5 mb-2 hover:font-bold">
            <Link>Sign In</Link>
          </div>
          <div className="text-white text-md mb-2 font-semibold hover:font-bold">
            <button
              onClick={() => setProfileMenu(!profileMenu)}
              className="flex items-center relative uppercase cursor-pointer"
            >
              <FiUser className="mr-1" />
              Profile
            </button>
            <ul
              className={`absolute ${
                profileMenu ? "block" : "hidden"
              } bg-cyan-800 text-white font-semibold uppercase cursor-pointer p-2 ml-20 rounded-sm`}
            >
              <li>
                <Link className="flex mb-2 hover:font-bold">
                  <FiUser className="mr-2" />
                  View Profile
                </Link>
              </li>
              <li>
                <Link className="flex mb-2 hover:font-bold">
                  <FiLogOut className="mr-2" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
