import React from "react";
import Button from "../shared/Button";

const YourOrder = () => {
  return (
    <div>
      <h3 className="text-2xl mb-4">Your Order</h3>
      <div className="bg-gray-100 p-5 rounded-md">
        <div className="flex justify-between pb-5 border-b">
          <h2 className="text-base font-bold">PRODUCT</h2>
          <h2 className="text-base font-bold">TOTAL</h2>
        </div>

        <div className=" bg-white">
          <div className="flex justify-between py-5 px-5 border-b">
            <h2 className="text-base font-medium">Casillero Diablo Cabernet Sauvignon <span className="text-gray-400 font-sm"> (x1)</span></h2>
            <h2 className="text-base font-bold ml-3">$374.43</h2>
          </div>
          <div className="flex justify-between py-5 px-5 border-b">
            <h2 className="text-base font-medium">Häagen-Dazs Salted Caramel<span className="text-gray-400 font-sm"> (x2)</span></h2>
            <h2 className="text-base font-bold ml-3">$48.43</h2>
          </div>
          <div className="flex justify-between py-5 px-5 border-b">
            <h2 className="text-base font-medium">Soft Mochi & Galeto Ice<span className="text-gray-400 font-sm"> (x3)</span></h2>
            <h2 className="text-base font-bold ml-3">$47.43</h2>
          </div>
          <div className="flex justify-between py-5 px-5 border-b">
            <h2 className="text-base font-medium">Slimming World Vegan Mac Greens<span className="text-gray-400 font-sm"> (x5)</span></h2>
            <h2 className="text-base font-bold ml-3">$4.43</h2>
          </div>
        </div>

        <div className="flex justify-between py-5 ">
          <h2 className="text-base font-bold">Subtotal</h2>
          <h2 className="text-base font-bold text-orange">$ 100.00</h2>
        </div>

        <div className="py-5 border-b space-y-3">
          <span className="text-title">Shipping</span>
          <ul className="">
            <li className="">- Flat rate</li>
          </ul>
        </div>

        <div className="flex justify-between py-5 ">
          <h2 className="text-lg font-bold">Total</h2>
          <h2 className="text-lg font-bold text-green">$ 100.00</h2>
        </div>

        <div className="">
          <h2 className="text-lg font-bold">Payment Method</h2>
          <p className="text-gray-500  mt-3">- Pay with Credit/Debit Card</p>
        </div>

      </div>
      <Button title="Place Order" className="w-full py-3 mt-5" />
    </div>
  );
};

export default YourOrder;
