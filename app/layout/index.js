import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from "./Footer"
import Header from "./Header"
import { auth } from "../utils/firebase"
import { removeUser, updateUser } from '../redux/slices/authSlice'

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    //firebase user listener
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          updateUser({
            email: user.email,
            name: user.displayName,
            image: user.photoURL
          })
        )
      } else {
        dispatch(
          removeUser()
        )
      }
    })



    return unsubscribe

  }, [])


  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout