import { BsTagFill } from "react-icons/bs"; 
import { AiFillCalendar } from "react-icons/ai"; 
import { FaUser } from "react-icons/fa"; 
import React from 'react'

const BlogNews = ({img ,tag , title , para}) => {
  return (
    <>
    <div>
      <img src={img} alt="" className='w-[800px]'  />
      <ul className="flex gap-9 items-center pt-3 font-Poppins font-normal text-base text-[#6B7280]">

        <li className="flex items-center gap-2">
          <FaUser />
          <p>Admin</p>
        </li>

        <li className="flex items-center gap-2">
          <AiFillCalendar />
          <p>14 Oct 2022</p>
        </li>

        <li className="flex items-center gap-2">
          <BsTagFill />
          <p>{tag}</p>
        </li>
      </ul>
      <h2 className="font-Poppins font-medium text-[30px] py-4 text-black">{title}</h2>
      <p className="w-[800px] font-Poppins font-regular text-[15px] text-secondary">{para}</p>
      <button className="font-Poppins font-regular text-base mt-7 pb-3 text-black cursor-pointer border-b-1 border-secondary ">Read more</button>
    </div>
    </>
  )
}

export default BlogNews