import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../stote/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();

  const selectedCatagory = useSelector((state) => state.category.category);

  return (
    <div className=" ml-6">
      <h3 className=" text-xl font-semibold">Find the best food</h3>

      <div className=" my-5 flex gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500  hover:text-white ${
            selectedCatagory === "All" && "bg-green-500 text-white"
          } `}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={category}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500  hover:text-white ${
              selectedCatagory === category && "bg-green-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
