import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/searchSlice";

function Navbar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchedItems);
  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <nav className="flex flex-col  md:flex-row justify-between py-6 mx-3">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold "> Food Delivery App</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="search here"
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none
           mt-7 w-full md:w-[20vw] md:mt-0"
           value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </nav>
  );
}

export default Navbar;
