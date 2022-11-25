
import React from 'react'
import { useSelector } from 'react-redux'
import Auth from '../components/auth'
import DashboardWrapper from '../components/dashboard/DashboardWrapper'
import Breadcrumbs from "../components/shared/Breadcrumb"
import { selectUser } from '../redux/slices/authSlice'

const DashboardLayout = ({ children }) => {
    const user = useSelector(selectUser)
    return (
        <main>
            <div className="bg-[#f5f5f5] p-5">
                <div className="mx-auto max-w-6xl">
                    <Breadcrumbs />
                </div>
            </div>
            {user ? (
                <DashboardWrapper>
                    {children}
                </DashboardWrapper>

            ) : (
                <Auth />
            )}
        </main>
    )
}

export default DashboardLayout