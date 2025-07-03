import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { GrFavorite } from 'react-icons/gr'
import { TbUserExclamation } from 'react-icons/tb'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='py-7'>
      <div className="container flex justify-between items-center">

        <div>
          <img src="public/logo.png" alt="logo" />
        </div>

        <ul className='flex items-center gap-[75px] font-Poppins font-medium text-[16px] text-black'>
          <li><Link to={"/"} >Home</Link></li>
          <li><Link to={"/"} >Shop</Link></li>
          <li><Link to={"/"} >About</Link></li>
          <li><Link to={"/"} >Contact</Link></li>
        </ul>

      <div>
        <ul className='flex items-center gap-[45px] text-2xl'>
          <li><Link to={"/"}><TbUserExclamation /></Link></li>
          <li><Link to={"/"}><CiSearch /></Link></li>
          <li><Link to={"/"}><GrFavorite /></Link></li>
          <li><Link to={"/"}><AiOutlineShoppingCart /></Link></li>
        </ul>
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar