
import React from 'react'
import { useSelector } from 'react-redux'
import Auth from '../components/auth'
import Breadcrumbs from "../components/shared/Breadcrumb"
import { selectUser } from '../redux/slices/authSlice'

const SecureLayout = ({ children }) => {
    const user = useSelector(selectUser)
    return (
        <main>
            {user ? (
                <>
                    {children}
                </>

            ) : (
                <>
                    <div className="bg-[#f5f5f5] p-5">
                        <div className="mx-auto max-w-6xl">
                            <Breadcrumbs />
                        </div>
                    </div>
                    <Auth />
                </>
            )}
        </main>
    )
}

export default SecureLayout