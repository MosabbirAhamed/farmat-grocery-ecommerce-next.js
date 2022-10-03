import Button from "../shared/Button";
import React from 'react'
import Link from "next/link";

const FailedContent = () => {


    return (
        <div className="mb-5">
            <img className="mx-auto w-1/2 rounded-2xl" loading="lazy" src="/images/order/failed.gif" alt="Payment Success" />
            <h2 className="text-center text-lg pt-6 font-semibold">Your Payment has been failed :( </h2>
            <Link href="/">
                <a href="/">
                    <Button title="Back to Home" className="w-1/2 mx-auto py-3 mt-5 block rounded" />
                </a>
            </Link>

        </div>
    )
}

export default FailedContent