import React from 'react'
import ProductItems from '../Home/ProductItems'
import { Link } from 'react-router-dom'

const RelatedProduct = () => {
  return (
    <section className='py-16'>
        <div className="container">
            <h2 className='text-center font-Poppins font-medium text-[36px] text-black'>Related Products</h2>
            <div className='grid grid-cols-4 gap-6 pt-7 pb-11'>
                <ProductItems/>
                <ProductItems/>
                <ProductItems/>
                <ProductItems/>
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
  )
}

export default RelatedProduct