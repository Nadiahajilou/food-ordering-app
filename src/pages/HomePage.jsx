import React from "react";
import Navbar from "../components/Navbar";
import CategorieItems from "../components/CategorieItems";
import FoodItems from "../components/FoodItems";

import CheckOut from "../components/CheckOut";


function HomePage() {
 
  return (
    <div className="m-3">
      <Navbar />
      <CategorieItems />
      <FoodItems/>
      <CheckOut/>
    </div>
  );
}

export default HomePage;
