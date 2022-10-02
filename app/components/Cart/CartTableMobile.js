import React from 'react'
import { MdDelete } from 'react-icons/md';
import Quantity from '../shared/Quantity';

const CartTableMobile = () => {
    return (
        <div className="flex md:hidden gap-3 pb-4">
            <div>
                <img className="w-20 h-20 object-cover rounded-md" src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/07_7b.jpg?resize=300%2C300&ssl=1" alt="" />
            </div>
            <div className="flex-grow space-y-1 ">
                    <h1 className="text-lg font-bold text-title">Vimto Squash Remix Litres</h1>
                    <p className="text-sm text-gray-500">Color: Black</p>
                    <p className="text-sm text-gray-500">500g</p>
                    <p className="text-sm text-gray-500">Price: <span className="text-orange font-semibold">$ 100</span></p>
                    <p className="text-sm text-gray-500">Total Price: <span className="text-green font-semibold">$ 100</span></p>
            </div>
            <div className="mt-2 relative">
                <MdDelete className="text-2xl cursor-pointer" />
                <div className="w-fit absolute right-0 top-[40%]"><Quantity /></div>

            </div>
        </div>
    )
}

export default CartTableMobile