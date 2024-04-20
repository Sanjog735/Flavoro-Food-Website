import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../stote/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className=" flex flex-col lg:flex-row items-center justify-between mx-6 py-4 mb-10">
      <div>
        <h3 className=" text-xl font-bold text-gray-600 ">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className=" text-2xl font-bold ">Flavoro Food</h1>
      </div>

      <div>
        <input
          className="py-2 px-4 border border-gray-400 text-sm outline-none rounded-lg w-full lg:w-[25vw]"
          type="search"
          name="search"
          placeholder="Search Item"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
