import React from 'react'
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/slices/basketSlice';
import CartTableMobile from './CartTableMobile';
import CartTableRow from './CartTableRow';

const CartTable = () => {
    const cartItems = useSelector(selectItems)
    return (
        <div className="my-5">
            <table className="w-full md:table hidden">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="text-title py-3"></th>
                        <th className="text-title py-3">Product</th>
                        <th className="text-title py-3">Price</th>
                        <th className="text-title py-3">Quantity</th>
                        <th className="text-title py-3">Total</th>
                        <th className="text-title py-3"></th>

                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <CartTableRow key={item.id} {...item} />
                    ))}
                </tbody>
            </table>

            {cartItems.map((item) => (
                <CartTableMobile key={item.id} {...item} />
            ))}
        </div>
    )
}

export default CartTable