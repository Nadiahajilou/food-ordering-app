import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import CheckOutItems from "./CheckOutItems";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const [activeCheckOut, setActiveCheckOut] = useState(false);
  const chosenItems = useSelector((state) => state.cart.cart);
  const totalQnty = chosenItems.reduce((total, item) => total + item.qnty, 0);
  const totalPrice = chosenItems.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full bg-white md:w-[25vw] h-full ${
          activeCheckOut ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center p-5">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdCloseCircleOutline
            onClick={() => {
              setActiveCheckOut(!activeCheckOut);
            }}
            className="text-[24px] hover:text-red-600 cursor-pointer"
          />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-200px)] p-5 scrollbar-hide  ">
          {chosenItems.length > 0 ? (
            chosenItems.map((item) => <CheckOutItems key={item.id} {...item} />)
          ) : (
            <h2 className="text-center font-bold text-sm text-gray-800">
              Your order list is empty
            </h2>
          )}
        </div>
        <div className="p-5 border-t border-gray-200">
          <h3 className="font-semibold text-gray-600 mb-1">
            Items: {totalQnty}
          </h3>
          <h3 className="font-semibold text-gray-600 mb-3">
            Total: {totalPrice}$
          </h3>
          {chosenItems.length > 0 && (
            <button
              onClick={() => navigate("/success")}
              className="bg-green-500 font-bold px-3 py-2 text-white rounded-md w-full"
            >
              Checkout
            </button>
          )}
        </div>
      </div>
      <div
        onClick={() => {
          setActiveCheckOut(!activeCheckOut);
        }}
        className={`border rounded-full bg-white shadow-lg text-2xl p-4 fixed bottom-4 right-4 
        hover:bg-green-200
        cursor-pointer ${chosenItems.length > 0 && "animate-bounce"}`}
      >
        <span className="bg-green-500 text-white  text-sm rounded-full absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center">
          {totalQnty}
        </span>
        <FaShoppingCart />
      </div>
    </>
  );
}

export default CheckOut;
