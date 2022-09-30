import React from 'react'
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
  return (
    <div className="flex items-center gap-5 md:gap-0 md:justify-between md:flex-row flex-col">
      <div className="border p-5 md:w-[48%] w-full flex flex-col gap-2">
        <h1 className="text-orange font-bold text-2xl md:text-5xl ">3.00</h1>
        <div className="">
          <ReactStars
            count={5}
            value={3.0}
            size={18}
            activeColor="#EFB338"
            edit={false}
            isHalf={true}
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
            filledIcon={<BsStarFill />}
          />
        </div>
        <p className="text-sm">Avg. Star Rating: <span className="font-bold text-title pl-2" >(1 Review)</span></p>

        <div className="border-t space-y-1 mt-5 py-2">
          <div className="flex items-center gap-2 text-sm text-title">
            <p className="text-title">5 Star</p>
            <span className="flex-1 bg-gray-200 h-2 "></span>
            <p className="text-title">0%</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-title">
            <p className="text-title">4 Star</p>
            <span className="flex-1 bg-gray-200 h-2 "></span>
            <p className="text-title">0%</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-title">
            <p className="text-title">3 Star</p>
            <span className="flex-1 bg-primary h-2 "></span>
            <p className="text-title">100%</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-title">
            <p className="text-title">2 Star</p>
            <span className="flex-1 bg-gray-200 h-2 "></span>
            <p className="text-title">0%</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-title">
            <p className="text-title">1 Star</p>
            <span className="flex-1 bg-gray-200 h-2 "></span>
            <p className="text-title">0%</p>
          </div>
        </div>

      </div>

      <div className="py-5 md:py-0 md:w-[48%] w-full flex flex-col gap-2">
        <h3 className="font-bold text-title text-lg">ADD YOUR REVIEW</h3>
        <div className="text-color text-xs flex items-center gap-2">
          <p className="">Your Rating:</p>
          <ReactStars
            count={5}
            value={0}
            size={18}
            activeColor="#EFB338"
            edit={true}
            isHalf={true}
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
            filledIcon={<BsStarFill />}
          />
        </div>
        <textarea className="w-full border outline-none p-2 mt-2" placeholder="Write Your Review" required></textarea>
        <p className="btn-white bg-orange text-white">Submit</p>
      </div>
    </div>
  )
}

export default Reviews