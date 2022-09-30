import React from 'react'

const Quantity = () => {
    return (
        <div className="flex border">
            <button className="w-10 bg-[#f5f5f5] flex justify-center items-center font-bold">-</button>
            <span className="w-10 text-center border border-[#e5e5e5] flex justify-center items-center">1</span>
            <button className="w-10 bg-[#f5f5f5] flex justify-center items-center font-bold">+</button>
        </div>
    )
}

export default Quantity