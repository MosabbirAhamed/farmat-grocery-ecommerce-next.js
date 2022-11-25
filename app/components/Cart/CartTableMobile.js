import React from 'react'
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from '../../redux/slices/basketSlice';
import Quantity from '../shared/Quantity';

const CartTableMobile = ({ id, name, image, price, weight }) => {
    const dispatch = useDispatch()

    const increaseQuantity = () => {
        dispatch(increaseItemQuantity(id))
    }
    const decreaseQuantity = () => {
        dispatch(decreaseItemQuantity(id))
    }
    return (
        <div className="flex md:hidden gap-3 pb-4">
            <div>
                <img className="w-20 h-20 object-cover rounded-md" src={image} alt="" />
            </div>
            <div className="flex-grow space-y-1 ">
                <h1 className="text-lg font-bold text-title">{name}</h1>
                <p className="text-sm text-gray-500">Color: Black</p>
                <p className="text-sm text-gray-500">weight: {weight}</p>
                <p className="text-sm text-gray-500">Price: <span className="text-orange font-semibold">$ {price}</span></p>
                <p className="text-sm text-gray-500">Total Price: <span className="text-green font-semibold">$ 100</span></p>
            </div>
            <div className="mt-2 relative">
                <MdDelete className="text-2xl cursor-pointer" />
                <div className="w-fit absolute right-0 top-[40%]">
                    <Quantity
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                </div>

            </div>
        </div>
    )
}

export default CartTableMobile