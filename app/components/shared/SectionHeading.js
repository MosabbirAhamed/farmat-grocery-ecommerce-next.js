import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import LeftRight from './LeftRight';


const SectionHeading = ({title, moreText, moreUrl = "/"}) => {
    return (
        <div className="flex justify-between items-center">
            {/* Section Title */}
            <div className="flex items-center gap-10">
                <h1 className="section-title">{title}</h1>
                <a href={moreUrl} className="hidden md:flex text-color items-center gap-2 hover:text-primary transition duration-300 ease-in-out">{moreText}<AiOutlineRight /> </a>
            </div>
            {/* Slider Left Right */}
            <LeftRight />
        </div>
    )
}

export default SectionHeading