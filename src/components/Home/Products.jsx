import React from 'react'
import { Link } from 'react-router-dom'
import ProductItems from '../Home/ProductItems'

const Products = (item) => {
  return (
    <>

    
    <section className="Products pb-[69px]">
  <div className="container mx-auto px-4">
    <h2 className="font-Poppins font-bold text-primary text-[28px] sm:text-[32px] md:text-[40px] text-center">
      Our Products
    </h2>

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
      <ProductItems />
      <ProductItems />
      <ProductItems />
      <ProductItems />
      <ProductItems />
      <ProductItems />
      <ProductItems />
      <ProductItems />
    </div>

    {/* Show More Button */}
    <div className="text-center">
      <Link
        to="/shop"
        className="px-20 py-3 inline-block font-Poppins font-semibold text-[16px] border border-brand text-brand hover:bg-brand hover:text-white transition"
      >
        Show More
      </Link>
    </div>
  </div>
</section>

    </>
  )
}

export default Products