import React from 'react'

import CartTableMobile from './CartTableMobile';
import CartTableRow from './CartTableRow';

const CartTable = () => {
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
                    <CartTableRow />
                    <CartTableRow />
                    <CartTableRow />
                </tbody>
            </table>

            <CartTableMobile />
            <CartTableMobile />
            <CartTableMobile />
        </div>
    )
}

export default CartTable