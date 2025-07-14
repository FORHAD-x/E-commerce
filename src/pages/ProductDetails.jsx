import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Details from '../components/ProductDetails/Details'
import RelatedProduct from '../components/ProductDetails/RelatedProduct'

const ProductDetails = () => {
  return (
    <>
    <section className='ProductDetails'>
      <div className='bg-[#F9F1E7] py-9'>
        <Breadcrumb/>
      </div>
      <div className='border-b-1 border-primary'>
        <Details/>
        <RelatedProduct/>
      </div>
    </section>
    </>
  )
}

export default ProductDetails