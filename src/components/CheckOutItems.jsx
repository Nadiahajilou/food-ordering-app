import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";
import toast from "react-hot-toast";

function CheckOutItems({ id, name, price, img, qnty }) {
  const dispatch = useDispatch();

  const handleremoveFromCart = () => {
    dispatch(removeFromCart({ id }));
    toast(`${name} removed  `, {
      icon: "👏",
    });
  };

  const incrementHandler = () => {
    dispatch(incrementQuantity({ id }));
  };
  const decrementHandler = () => {
    dispatch(decrementQuantity({ id }));
  };
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-5 mb-3 relative">
      <FaTrash
        onClick={handleremoveFromCart}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[60px] h-[60px] rounded-sm" />
      <div className="leading-5 ml-1">
        <h2 className="font-bold text-gray-800 text-sm">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold mt-2">{price} $</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 mt-1">
            <AiOutlinePlus
              onClick={incrementHandler}
              className="border-2 border-gray-800 text-gray-800 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qnty}</span>
            <AiOutlineMinus
              onClick={decrementHandler}
              className="border-2 border-gray-800 text-gray-800 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutItems;
