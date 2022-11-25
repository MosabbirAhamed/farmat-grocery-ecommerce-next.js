import React from 'react'
import Quantity from '../shared/Quantity'
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItem } from "../../redux/slices/basketSlice"

const CartTableRow = ({ id, name, image, price, weight, quantity }) => {

    const dispatch = useDispatch()

    const increaseQuantity = () => {
        dispatch(increaseItemQuantity(id))
    }
    const decreaseQuantity = () => {
        dispatch(decreaseItemQuantity(id))
    }
    return (
        <>
            <tr className="border-b border-l border-r">
                <td className="py-5 px-2">
                    <img className="w-20 h-20 object-cover rounded-md" src={image} alt="" />
                </td>

                <td className="py-5 max-w-[250px]">
                    <div className="">
                        <h1 className="text-lg font-bold text-title">{name}</h1>
                        <p className="text-sm text-gray-500">Color: Black</p>
                        <p className="text-sm text-green">weight: {weight}</p>
                    </div>
                </td>

                <td className="py-5 px-2">$ {price}</td>

                <td className="py-5">
                    <div className="w-fit"><Quantity
                        quantity={quantity}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    /></div>
                </td>

                <td className="py-5 px-2">$ {(quantity * price).toFixed(2)}</td>
                <td className="py-5">
                    <MdDelete onClick={() => dispatch(removeItem(id))} className="text-2xl cursor-pointer" />
                </td>
            </tr>
        </>
    )
}

export default CartTableRow