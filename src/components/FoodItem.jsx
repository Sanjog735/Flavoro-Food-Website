import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import FoodData from "../data/FoodData";
import FoodCard from "./FoodCard";

const FoodItem = () => {
  const handleToast = (name) => toast.success(`${name} Added to Cart`);

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className=" flex flex-wrap gap-10 items-center justify-center my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLocaleLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            img={food.img}
            rating={food.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItem;
