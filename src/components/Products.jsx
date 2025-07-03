import React from 'react'
import Productitems from './Productitems'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <section className='Products  pb-[69px]'>
      <div className="container">
          <h2 className='font-Poppins font-bold text-primary text-[40px] text-center'>Our Products</h2>
          <div className='grid grid-cols-4 gap-8 py-8'>
            <Productitems/>
            <Productitems/>
            <Productitems/>
            <Productitems/>
            <Productitems/>
            <Productitems/>
            <Productitems/>
            <Productitems/>
          </div>
          <div className='text-center'>
            <Link to={"/shop"} className='px-[78px] py-3  inline-block font-Poppins font-semibold text-[16px]  border-1 border-brand text-brand'>Show More</Link>
          </div>
      </div>
    </section>
    </>
  )
}

export default Products