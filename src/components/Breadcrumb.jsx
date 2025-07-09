import { BiChevronRight } from "react-icons/bi"; 
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location =useLocation();
    const path =location.pathname.split("/")[1];
  return (
    <>
    <ul className='flex gap-1.5 items-center justify-center font-Poppins font-medium text-black'>
        <li><Link to={"/"}>Home</Link></li>
        <li><BiChevronRight size={25}/></li>
        <li className="font-light capitalize ">{path}</li>
    </ul>
    </>
  )
}

export default Breadcrumb