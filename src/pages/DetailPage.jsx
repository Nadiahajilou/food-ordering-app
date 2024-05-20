import React from "react";
import { Link, useParams } from "react-router-dom";
import { FoodData } from "../data/FoodData";

function DetailPage() {
  const { id } = useParams();
  const item = FoodData.find((food) => food.id === parseInt(id))
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-9">
      <img src={item.img} alt={item.name} className=" h-64 object-cover rounded-lg" />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
        <p className="text-gray-700 mb-4">{item.desc}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-gray-900">{item.price} $</span>
        </div>
        <Link to="/">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Back to Shop
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DetailPage;
