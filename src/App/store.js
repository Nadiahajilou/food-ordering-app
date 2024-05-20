import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import categoriesSlice from "../features/categoriesSlice";
import searchSlice from "../features/searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    categorie: categoriesSlice,
    search:searchSlice
  },
});

export default store;
