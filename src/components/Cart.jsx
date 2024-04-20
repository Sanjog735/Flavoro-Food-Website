import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className=" flex justify-between items-center my-3">
          <span className=" text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className=" border-2 border-gray-600 hover:border-red-300 text-gray-600 hover:text-red-300 font-bold p-1 text-xl rounded-md cursor-pointer"
          />
        </div>

        {cartItem.length > 0 ? (
          cartItem.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              qty={item.qty}
            />
          ))
        ) : (
          <h2 className=" text-center text-xl font-bold text-green-500 mt-10">
            Your Cart Is Empty😢
          </h2>
        )}

        <div className=" absolute bottom-0">
          <h3 className=" font-semibold text-gray-800">
            Items : {cartItem.length}
          </h3>
          <h3 className=" font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className=" lg:w-[18vw] my-2" />
          <button
            onClick={() => {
              cartItem.length > 0
                ? navigate("/success")
                : setActiveCart(!activeCart);
            }}
            className=" bg-green-500 text-white font-bold px-3 py-2 rounded-md w-[90vw]  lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`z-20 bg-green-400 rounded-full shadow-md text-5xl p-3 fixed  right-4 bottom-4 cursor-pointer ${
          cartItem.length > 0 && "animate-bounce delay-500 transition-all "
        }`}
      />
    </>
  );
};

export default Cart;
