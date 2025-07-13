import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Details from '../components/ProductDetails/Details'

const ProductDetails = () => {
  return (
    <>
    <section className='ProductDetails'>
      <div className='bg-[#F9F1E7] py-9'>
        <Breadcrumb/>
      </div>
      <div>
        <Details/>
      </div>
    </section>
    </>
  )
}

export default ProductDetails