import React from 'react'
import Quantity from '../shared/Quantity'
import { MdDelete } from 'react-icons/md';

const CartTableRow = () => {
    return (
        <>
            <tr className="border-b border-l border-r">
                <td className="py-5 px-2">
                    <img className="w-20 h-20 object-cover rounded-md" src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/07_7b.jpg?resize=300%2C300&ssl=1" alt="" />
                </td>

                <td className="py-5 max-w-[250px]">
                    <div className="">
                        <h1 className="text-lg font-bold text-title">Häagen-Dazs Salted Caramel </h1>
                        <p className="text-sm text-gray-500">Color: Black</p>
                        <p className="text-sm text-green">500g</p>
                    </div>
                </td>

                <td className="py-5 px-2">$ 100</td>

                <td className="py-5">
                    <div className="w-fit"><Quantity /></div>
                </td>

                <td className="py-5 px-2">$ 100</td>
                <td className="py-5">
                    <MdDelete className="text-2xl cursor-pointer" />
                </td>
            </tr>
        </>
    )
}

export default CartTableRow