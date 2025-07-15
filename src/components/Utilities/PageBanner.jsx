import React from 'react'
import Breadcrumb from './Breadcrumb'
import logo from "/public/logo.png"

const PageBanner = ({title}) => {
 return (
    <>
    <section className='Banner pt-[122px] pb-[97px] bg-[url(/shop-banner.png)] bg-no-repeat bg-cover'>
      <div className="container">
        <img src={logo} alt="logo" className='m-auto'/>
        <h3 className='font-Poppins font-medium text-black text-[48px] text-center'>{title}</h3>
        <Breadcrumb/>
      </div>
    </section>
    </>
  )
}

export default PageBanner
