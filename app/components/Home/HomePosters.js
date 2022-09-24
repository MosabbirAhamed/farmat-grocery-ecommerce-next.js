import React from 'react'
import { setBackgroundImage } from '../../utils/helpers'

const HomePosters = () => {
    return (
        <section className="pb-8">
            <div className="container">

                <div className="flex flex-wrap justify-between">

                    {/* Hero right Banner */}
                    <div className="md:w-[32%] mb-5 cursor-pointer w-full md:py-10 md:px-12 py-10 px-6 rounded-lg " style={setBackgroundImage("/images/bottle/homepage-new-banner-2.png", { backgroundPosition: "center center", backgroundColor: "#fac251", backgroundSize: "cover",})}>
                        <div className="flex flex-col justify-between h-full" >
                            <div>
                                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-black">Mango Juice <br />Bottle</h2>
                                {/* <p className="text-title text-sm md:text-base md:mt-7 mt-4 font-semibold">Lorem ispum dolor  <br /> sit amet</p> */}
                                
                            </div>
                            <span className="text-gray-500 text-base font-semibold mt-7">20% off for new coustomer</span>
                        </div>
                    </div>

                    {/* Hero right Banner */}
                    <div className="md:w-[32%]  cursor-pointer  mb-5 w-full md:py-10 md:px-12 py-10 px-6 rounded-lg " style={setBackgroundImage("/images/bottle/homepage-new-banner-3.png", { backgroundPosition: "bottom right", backgroundColor: "#CED8DF", backgroundSize: "unset",})}>
                        <div className="flex flex-col justify-between h-full" >
                            <div>
                                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-orange">$9.9 <span className="text-title text-lg line-through font-bold">$15.4</span></h2>
                                <p className="text-black text-base md:text-lg md:mt-5 mt-4 font-bold">MEAT PORK <br />CANNED</p>
                                
                            </div>
                            <span className="text-gray-500 text-lg font-semibold mt-7 ">250g</span>
                        </div>
                    </div>

                    {/* Hero right Banner */}
                    <div className="md:w-[32%]  cursor-pointer  mb-5 w-full md:py-10 md:px-12 py-10 px-6 rounded-lg " style={setBackgroundImage("/images/bottle/homepage-new-banner-4.png", { backgroundPosition: "center center", backgroundColor: "#fac251", backgroundSize: "cover",})}>
                        <div className="flex flex-col justify-between h-full" >
                            <div>
                                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-white">Olive oil</h2>
                                <p className="text-white text-sm md:text-base md:mt-7 mt-4 font-bold">Best product to make <br /> your favor</p>
                                
                            </div>
                            <span className="text-white text-sm md:text-base font-semibold mt-7 ">ONLY</span>
                            <span className="text-white text-2xl md:text-3xl font-bold">$15.4</span>
                        </div>
                    </div>

                  

                </div>
            </div>
        </section>
    )
}

export default HomePosters