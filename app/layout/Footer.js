import React from 'react'
import FooterCard from '../components/FooterCard'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'
import { BiEnvelope } from 'react-icons/bi'
import Link from 'next/link';
import Button from '../components/shared/Button'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container">
        {/* footer infos */}
        <div className="flex flex-wrap space-y-4 border-b pb-10 pt-8 justify-between items-center">
          <FooterCard
            image="/icons/f_1.svg"
            title="Free Shipping"
            subtitle="For all orders over $200"
          />
          <FooterCard
            image="/icons/f_2.svg"
            title="1 & 1 Returns"
            subtitle="Cancellation after 1 day"
          />
          <FooterCard
            image="/icons/f_3.svg"
            title="100% Secure Payment"
            subtitle="Gurantee secure payments"
          />
          <FooterCard
            image="/icons/f_4.svg"
            title="24/7 Dedicated Support"
            subtitle="Anywhere & anytime"
          />
          <FooterCard
            image="/icons/f_5.svg"
            title="Daily Offers"
            subtitle="Discount up to 70% OFF"
          />

        </div>

        {/* footer widgets */}
        <div className="my-10 flex flex-wrap gap-10 justify-between">

          {/* contacts */}
          <div className="max-w-sm">
            <h2 className="text-xl mb-6 font-bold ">Farmart - Your Online Foods & Grocery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam vulputate et justo eget scelerisque.</p>
            <div className="mt-5 space-y-2">

              <span className="flex ">
                <FiPhoneCall className="text-color ml-[5px]" />
                <div className="ml-4">
                  <p className=""> Hotline 24/7:</p>
                  <h3 className="text-2xl font-bold">(+965) 7492-4277</h3>
                </div>
              </span>

              <span className="flex !mt-7">
                <AiOutlineHome className="text-color ml-[5px]" />
                <address className="ml-4 text-color not-itlic">6540 Patnitala, Naogaon, BD</address>
              </span>

              <span className="flex">
                <BiEnvelope className="text-color ml-[5px]" />
                <p className="ml-4">support@mosabbir.com</p>
              </span>
            </div>
          </div>

          {/* links */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold ">Useful Links</h2>
            <ul className="space-y-4 text-color">
              <FooterLink href="/" text="About Us" />
              <FooterLink href="/" text="Contact" />
              <FooterLink href="/" text="Help Center" />
              <FooterLink href="/" text="Career" />
              <FooterLink href="/" text="Policy" />
              <FooterLink href="/" text="Flash Sale" />
              <FooterLink href="/" text="Official" />
              <FooterLink href="/" text="Sitemap" />
            </ul>
          </div>

          {/* links */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold ">Help Center</h2>
            <ul className="space-y-4 text-color">
              <FooterLink href="/" text="Payments" />
              <FooterLink href="/" text="Shipping" />
              <FooterLink href="/" text="Product Returns" />
              <FooterLink href="/" text="FAQ" />
              <FooterLink href="/" text="Checkout" />
              <FooterLink href="/" text="Other Issues" />
            </ul>
          </div>

          {/* links */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold ">Farmart Busines</h2>
            <ul className="space-y-4 text-color">
              <FooterLink href="/" text="Sell On Farmart" />
              <FooterLink href="/" text="Affiliate Programt" />
              <FooterLink href="/" text="Our Suppliers" />
              <FooterLink href="/" text="Accessibility" />
              <FooterLink href="/" text="Advertise With Us" />
            </ul>
          </div>

          {/* Newsletter */}

          <div className="max-w-sm">
            <h2 className="text-xl mb-6 font-bold ">Farmart Newsletter</h2>
            <p>Register now to get updates on promotions and coupns. Don't worry! We not spam.</p>
            <div className="flex items-center pt-7">
              <div className="flex items-center border border-gray-300 p-2 md:p-4 rounded">
                <BiEnvelope className="text-color ml-[5px]" />
                <input
                  type="text"
                  placeholder="Your email ..."
                  className="outline-none w-[120px] md:w-auto px-2 md:px-4 flex-1 rounded-l"
                />
              </div>
              <Button title="Subscribe" className="self-stretch"/>
            </div>
          </div>

        </div>

        {/* copyright */}
        <div className="my-10 flex md:justify-between flex-wrap space-y-3 justify-center items-center border-t">

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} 
        <a href="https://mosabbir-ahamed.netlify.app/" className="hover:underline" target="_blank" rel="noreferrer"> Mosabbir Ahamed</a>
        . No Rights Reserved.
         <span> Bulid for Educational Purposes.</span>
          </span>

          <img src="/images/footer-new-payment.png" alt="" />

        </div>


      </div>
    </footer>
  )
}

const FooterLink = ({ text, href = "#" }) => (
  <li>
    <Link href={href}>
      <a className="text-color hover:text-primary" href={href}>{text}</a>
    </Link>
  </li>
)

export default Footer