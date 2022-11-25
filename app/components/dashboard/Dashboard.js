import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'

const Dashboard = () => {
    const user = useSelector(selectUser)
    console.log(user)
    return (
        <div className="">

            <h1 className="text-center text-xl font-bold mb-4">Hi {user.name}, Welcome to Your Dashboard</h1>

            <img className="rounded-xl w-3/5 mx-auto" loading="lazy" src="/images/preview.gif" alt="" />

        </div>
    )
}

export default Dashboard