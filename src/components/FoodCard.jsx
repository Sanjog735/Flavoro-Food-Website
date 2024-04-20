import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../stote/slices/CartSlice";

const FoodCard = ({ id, img, name, price, rating, desc, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className=" font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg cursor-grab ">
      <img
        className="h-[130px]  w-full object-cover bg-center"
        src={img}
        alt="items"
      />

      <div className=" text-sm flex justify-between">
        <h2>{name}</h2>
        <span className=" text-green-600">₹{price}</span>
      </div>

      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>

      <div className=" flex justify-between">
        <span className=" flex justify-center items-center">
          <FaStar className="text-yellow-400 mr-1" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addItem({ id, img, name, price, qty: 1 }));
            handleToast(name);
          }}
          className=" bg-green-500 px-2 py-1 text-white rounded-md text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
