<<<<<<< HEAD
import React from 'react'
import Productitems from './Productitems'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    {/* <section className='Products  pb-[69px]'>
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
    </section> */}
    
    <section className="Products pb-[69px]">
  <div className="container mx-auto px-4">
    <h2 className="font-Poppins font-bold text-primary text-[28px] sm:text-[32px] md:text-[40px] text-center">
      Our Products
    </h2>

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
      <Productitems />
      <Productitems />
      <Productitems />
      <Productitems />
      <Productitems />
      <Productitems />
      <Productitems />
      <Productitems />
    </div>

    {/* Show More Button */}
    <div className="text-center">
      <Link
        to="/shop"
        className="px-8 py-3 inline-block font-Poppins font-semibold text-[16px] border border-brand text-brand hover:bg-brand hover:text-white transition"
      >
        Show More
      </Link>
    </div>
  </div>
</section>

    </>
  )
}

=======
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

>>>>>>> cc0cfb8fd75f72f4a5de9bfb17a1e9eb87c560bf
export default Products