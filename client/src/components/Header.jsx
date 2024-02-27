import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";

export default function Header() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
              className="p-1 mr-2 bg-slate-100 rounded-lg hidden sm:block outline-none"
            />
            <button
              type="submit"
              className="p-1 bg-blue-400 text-white uppercase font-semibold rounded-md hidden sm:block hover:font-bold"
            >
              Search
            </button>
          </div>
        </div>
        <div className="hidden p-3 md:flex items-center">
          <div className="text-white font-semibold uppercase cursor-pointer mr-3 hover:font-bold">
            <Link className="flex items-center">
              <FiShoppingCart className="mr-1" />
              Cart
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
            className="relative text-white font-semibold text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* .......MOBILE MENU....... */}

      {mobileMenu && (
        <div className="mt-4">
          <Link className="flex text-white text-md font-semibold mb-2 uppercase cursor-pointer hover:font-bold">
            <FiShoppingCart className="mr-1" />
            Cart
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
