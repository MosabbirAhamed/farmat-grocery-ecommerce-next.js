import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Search from '../components/Search';
import { FiUser , FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='bg-white py-5 border-b '>
      <div className="container ">

        {/* header top area */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="">
            <Link href="/">
              <a href="/">
                <Image
                  src="/logo.svg"
                  width="160"
                  height="55"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>

          {/* Search */}
          <Search />

          {/* Contact */}
          <div className=" flex-col hidden lg:flex">
            <span className="text-2xl font-bold">8 800 332 65-66</span>
            <p className="self-end text-color">Support 24/7</p>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Link href="/my-account">
            <a href="/my-account" className="">
              <FiUser className="text-3xl text-title"/>
            </a>
            </Link>

            <Link href="/cart">
            <a href="/cart" className="flex items-center gap-5">
              <div className="relative">
              <FiShoppingCart className="text-3xl text-title"/>
              <span className="bg-primary rounded text-center absolute px-2 text-sm -right-3 -top-2 font-bold">0</span>
              </div>
              <div className="hidden lg:block">
                <span className="text-color text-[12px] ">Your Cart</span>
                <p className="text-title font-bold text-base">$0.00</p>
              </div>
            </a>
            </Link>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header