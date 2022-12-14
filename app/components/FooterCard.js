import React from 'react'

const FooterCard = ({title, subtitle, image}) => {
  return (
    <div className="flex gap-5 items-center cursor-pointer">
        <img
         src={image}
         loading={"lazy"}
         className="w-10 h-10 object-contain "
         />
         <div>
            <h5 className="text-lg font-bold">{title}</h5>
            <p className="text-sm">{subtitle}</p>
         </div>
    </div>
  )
}

export default FooterCard