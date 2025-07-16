import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { GrFavorite } from 'react-icons/gr'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { TbUserExclamation } from 'react-icons/tb'
import { Link} from 'react-router-dom'
import CartSidebar from '../Cart/CartSidebar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sideCart ,setSideCart] = useState(false)
  const handleSideCart = (e)=>{
    setSideCart(e)
  }
  return (
    <>
    <nav className='py-7'>
      <div className="container flex justify-between items-center">

        <div>
          <Link to={"/"}>
          <img src="/logo.png" alt="logo" className='w-12 h-12' />
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* <ul className='flex items-center gap-[75px] font-Poppins font-medium text-[16px] text-black'>
          <li><Link to={"/"} >Home</Link></li>
          <li><Link to={"/"} >Shop</Link></li>
          <li><Link to={"/"} >About</Link></li>
          <li><Link to={"/"} >Contact</Link></li>
        </ul> */}

        <ul className={`md:flex gap-[75px] font-Poppins font-medium text-[16px] text-black items-center transition-all duration-300 ease-in-out 
          ${isOpen ? "flex flex-col absolute top-[90px] left-0 w-full bg-white py-6 z-50" : "hidden"}`}>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/shop"}>Shop</Link></li>
          <li><Link to={"/Contact"}>Contact</Link></li>
          <li><Link to={"/Blog"}>Blog</Link></li>
        </ul>


      <div className='hidden lg:block'>
        <ul className='flex items-center gap-[45px] text-2xl'>
          <li><Link to={"/user"}><TbUserExclamation /></Link></li>
          <li><Link to={"/"}><CiSearch /></Link></li>
          <li><Link to={"/fav"}><GrFavorite /></Link></li>
          <li onClick={()=> setSideCart(true)}><AiOutlineShoppingCart cursor={"pointer"}/></li>
        </ul>
      </div>
      </div>
    </nav>
    {
      sideCart && <CartSidebar close={handleSideCart} />
    }
    </>
  )
}

export default Navbar