import { BiChevronRight } from "react-icons/bi"; 
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location =useLocation();
    const path1 =location.pathname.split("/")[1];
    const path2 =location.pathname.split("/")[2];
  return (
    <>
    <ul className='flex gap-3 items-center justify-center font-Poppins font-medium text-black'>
        <li><Link to={"/"}>Home</Link></li>
        <li><BiChevronRight size={25}/></li>
        <li className="font-light capitalize">
          <Link to={`/${path1}`}>{path1}</Link>
        </li>
        {
          path2 &&
          <>
            <li><BiChevronRight size={25}/></li>
            <li className="font-light capitalize border-l-2 border-secondary pl-6 ">
              <p>
                {path2}
              </p>
            </li>
          </>
        }
    </ul>
    </>
  )
}

export default Breadcrumb