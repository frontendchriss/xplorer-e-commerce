import React from "react";
import Cartitem from "./cart-item";
import Subtotal from "./subtotal";

const Cart = () => {
  return (
    <div>
      <div className="h-screen prtransparent pt-20">
        <h1 className="mb-10 text-center text-4xl font-bold">Cart</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <Cartitem />
          </div>
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
