import React from 'react'
import { setBackgroundImage } from '../../utils/helpers';

const HomeHero = () => {


  return (
    <section className="py-10"
      style={setBackgroundImage("/images/hero-bg.jpg")}>
      <div className="container">

        <div className="flex gap-8 flex-wrap">


          {/* Hero left Banner */}
          <div className="flex-1 md:py-16 md:px-10 py-12 px-6 rounded-lg " style={setBackgroundImage("/images/hero-s-2.jpg")}>
            <div>
              <div className="flex flex-col justify-between h-full">
              <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-slate-600">Active Summer With <br /> Juice Mlik 300ml</h2>
              <p className="text-slate-600 text-sm md:text-base md:mt-7 mt-4">New arrivals with naturre fruits, juice <br /> milks, essential for summer</p>
              </div>
              <a href="/" className="btn-white mt-10 md:mt-14">Shop Now</a>
            </div>
          </div>

          {/* Hero right Banner */}
          <div className="md:w-1/3 w-full md:py-16 md:px-10 py-12 px-6 rounded-lg " style={setBackgroundImage("/images/hero-right.jpg" , {backgroundPosition:"bottom right" , backgroundColor:"#fac251", backgroundSize:"unset"})}>
            <div className="flex flex-col justify-between h-full" >
              <div>
              <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">20% SALE OFF</h2>
              <p className="text-title text-sm md:text-lg md:mt-7 mt-4 font-semibold">Synthetic seeds <br /> Net 2.0 OZ</p>
              </div>
              <a href="/" className="btn-white mt-10 md:mt-14">Shop Now</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HomeHero;