import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

const CartAction = () => {
  return (
    <div className="py-8 border-t">
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="md:w-[40%] w-full">
          <h3 className="text-xl mb-3 font-bold">Using A Promo Code?</h3>
          <div className="flex items-center">
            <div className="md:flex-1 md:w-auto w-[60%] items-center border p-4 rounded">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 outline-none bg-transparent "
              />
            </div>
            <Button title="Apply" className="self-stretch" />
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-md md:w-[40%] w-full">
          <div className="flex justify-between pb-5 border-b">
            <h2 className="text-lg font-bold">SubTotal</h2>
            <h2 className="text-lg font-bold">$ 100.00</h2>
          </div>

          <div className="py-5 border-b space-y-3">
            <span className="text-title">Shipping</span>
            <ul id="" className="">
              <li className="">- Flat rate</li>
            </ul>
            <p className="">
              Shipping to <strong>NY</strong>.
            </p>
          </div>
          <div className="flex justify-between py-5 ">
            <h2 className="text-xl font-bold">Total</h2>
            <h2 className="text-xl font-bold text-green">$ 100.00</h2>
          </div>
          <Link href="/checkout">
            <a href="/checkout">
              <Button title="Proceed to checkout" className="w-full py-3" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartAction;
