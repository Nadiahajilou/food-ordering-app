import React from "react";
import FoodCard from "./FoodCard";
import { FoodData } from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function FoodItems() {
  const notify = (name) => toast.success(` ${name} added to orderList `);
  const selectedCategorie = useSelector(
    (state) => state.categorie.selectedCategorie
  );
  const searchTerm = useSelector((state) => state.search.searchedItems);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" mx-3 ">
        <div className="  flex  flex-wrap gap-4 mt-5 justify-center md:justify-start">
          {FoodData.filter((food) => {
            if (selectedCategorie === "All") {
              return food.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
            }else{
             return selectedCategorie===food.category
            }
          }).map((item) => (
            <FoodCard key={item.id} {...item} notify={notify} />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default FoodItems;
