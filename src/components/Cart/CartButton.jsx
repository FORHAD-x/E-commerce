import React from 'react'
import { Link } from 'react-router-dom'

const CartButton = ({title ,path}) => {
  return (
    <Link to={path} className="px-7.5 py-1.5 cursor-pointer border-1 border-black rounded-[50px] font-Poppins font-normal text-[12px] text-black">
         {title}
    </Link>
  )
}

export default CartButton