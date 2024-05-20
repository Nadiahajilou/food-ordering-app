
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategorie } from "../features/categoriesSlice";
import {FoodData} from "../data/FoodData";

function CategorieItems() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategorie = useSelector(
    (state) => state.categorie.selectedCategorie
  );

  const listUniqeCategories = () => {
    const uniqueCategories = [
      "All",
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqeCategories();
  }, []);

  const dispatchHandler = (category) => {
    dispatch(setCategorie(category));
  };

  return (
    <div className="mt-8 mx-3 flex-col items-start">
      <h3 className="text-xl font-bold">Find the best food</h3>
      <div className="flex no-wrap gap-3 overflow-x-scroll scrollbar-hide md:overflow-x-hidden">
        {categories.map((category, index) => (
          <button
            onClick={() => dispatchHandler(category)}
            key={index}
            className={`px-3 mt-4 py-2 border rounded-lg font-bold ${
              selectedCategorie === category
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-green-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategorieItems;
