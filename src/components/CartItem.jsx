import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from "../stote/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ id, img, name, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className=" flex gap-3 shadow-md rounded-lg p-2 mb-3 ">
      <MdDelete
        onClick={() => {
          dispatch(deleteItem({ id }));
          toast.error(`${name} has been removed!`);
        }}
        className=" absolute right-7 cursor-pointer text-red-600"
      />

      <img className=" w-[50px] h-[50px] object-cover" src={img} alt="item" />

      <div>
        <h2 className=" font-bold text-gray-800">{name}</h2>

        <div className=" flex justify-between items-center">
          <span className=" text-green-500 font-bold">₹{price}</span>

          <div className=" flex items-center justify-center gap-2 absolute right-7">
            <AiOutlinePlus
              onClick={() => dispatch(increaseQuantity({ id }))}
              className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlineMinus
              onClick={() =>
                qty > 1
                  ? dispatch(decreaseQuantity({ id }))
                  : dispatch(
                      deleteItem({ id }),
                      toast.error(`${name} has been removed`)
                    )
              }
              className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
