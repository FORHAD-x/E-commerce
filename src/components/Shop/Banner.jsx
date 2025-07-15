import React from 'react'
import Breadcrumb from '../Breadcrumb'
import logo from "/public/logo.png"

const Banner = () => {
  return (
    <>
    <section className='Banner pt-[122px] pb-[97px] bg-[url(public/shop-banner.png)] bg-no-repeat bg-cover'>
      <div className="container">
       <img src={logo} className='m-auto'/>
        <h3 className='font-Poppins font-medium text-black text-[48px] text-center'>Shop</h3>
        <Breadcrumb/>
      </div>
    </section>
    </>
  )
}

export default Banner