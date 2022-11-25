import React from 'react'

const Quantity = ({ decreaseQuantity, increaseQuantity, quantity }) => {
    return (
        <div className="flex border h-10">
            <button onClick={decreaseQuantity} className="w-10 bg-[#f5f5f5] flex justify-center items-center font-bold">-</button>
            <span className="w-10 text-center border border-[#e5e5e5] flex justify-center items-center">{quantity || 1}</span>
            <button onClick={increaseQuantity} className="w-10 bg-[#f5f5f5] flex justify-center items-center font-bold">+</button>
        </div>
    )
}

export default Quantity