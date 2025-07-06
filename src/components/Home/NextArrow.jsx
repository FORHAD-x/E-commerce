import { BsChevronRight } from "react-icons/bs"; 
import { BiChevronRight } from "react-icons/bi"; 
import React from 'react'

const NextArrow = ({onClick}) => {
  return (
    <div
      className="w-12 h-12 bg-white cursor-pointer text-brand font-bold rounded-full flex items-center justify-center absolute top-1/2  right-[-10px] -translate-y-1/2"
      onClick={onClick}
    >
        <BsChevronRight />
    </div>
  )
}

export default NextArrow