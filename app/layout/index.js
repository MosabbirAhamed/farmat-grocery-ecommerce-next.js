import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from "./Footer"
import Header from "./Header"
import { auth, db } from "../utils/firebase"
import { removeUser, updateUser } from '../redux/slices/authSlice'
import { selectItems, updateBasket } from '../redux/slices/basketSlice'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectItems)

  useEffect(() => {
    //firebase user listener
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        db.collection('users').doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            dispatch(updateUser(doc.data()))
          }
        })
      } else {
        dispatch(
          removeUser()
        )
      }
    })

    const local_items = localStorage.getItem('@CART_ITEMS')
      ? JSON.parse(localStorage.getItem('@CART_ITEMS'))
      : []
    dispatch(updateBasket(local_items))

    return unsubscribe

  }, [])

  useEffect(() => {
    if (!cartItems.length) return;
    const items = JSON.stringify(cartItems)
    localStorage.setItem('@CART_ITEMS', items)
  }, [cartItems])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout