import Button from "../shared/Button";

import React, { useEffect, useState } from 'react'

const SuccessContent = () => {
    const [isTracking, setIsTracking] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsTracking(true)
        }, 5000)
    }, [])

    return (
        <div className="mb-5">
            {!isTracking ? (
                <>
                    <img className="mx-auto w-1/2" loading="lazy" src="/images/order/success.gif" alt="Payment Success" />
                    <h2 className="text-center text-lg">Thank you. Your Payment was Successful</h2>
                    <h2 className="text-center text-base pt-2">Processing Order ....</h2>
                </>
            ) : (
                <>
                    <img className="mx-auto w-1/2 rounded-2xl" loading="lazy" src="/images/order/orderDone.gif" alt="Payment Success" />
                    <h2 className="text-center text-lg pt-6 font-semibold">Congratulations. Your Order Successfully Completed 🙌</h2>
                    <h2 className="text-center text-lg pt-2">Your Order is on it's way 🏃🏻‍♀️</h2>
                    <h2 className="text-center text-lg pt-2"><strong>Order id:</strong> 848759</h2>
                    <Button title="View Order" className="w-1/2 mx-auto py-3 mt-5 block rounded" />
                </>)}



        </div>
    )
}

export default SuccessContent