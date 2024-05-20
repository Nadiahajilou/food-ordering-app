import React from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/cartSlice";

function FoodCard({ id, name, price, img, desc, category, rating, notify ,}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(AddToCart({ id, name, price, img }));
    notify(name);
  };

  return (
    <div className=" border border-gray-100 w-[255px] bg-white p-5 flex flex-col rounded-lg shadow-lg">
      <img
        src={img}
        alt={name}
        className="w-auto h-[150px] rounded-md hover:scale-105
      transition-all duration-300 ease-in-out cursor-grab "
      />

      <div className="text-sm mt-4 flex justify-between items-center">
        <h2 className="font-bold ">{name}</h2>
      </div>
      <span className="text-green-500 mt-2 ">{price} $</span>
      <p className=" mt-2 text-sm font-normalmt-2">{desc.slice(0, 20)}...</p>
      <div className="flex mt-2 justify-between">
        <span className="flex font-semibold justify-center items-center ">
          <IoMdStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <Link to={`/home-page/${id}`} className="ml-2">
          <MdOutlineDescription className=" text-2xl" />
        </Link>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
