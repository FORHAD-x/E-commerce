import React from 'react'
import Breadcrumb from '../components/Utilities/Breadcrumb'
import Details from '../components/ProductDetails/Details'
import RelatedProduct from '../components/ProductDetails/RelatedProduct'
import Description from '../components/ProductDetails/Description'

const ProductDetails = () => {
  return (
    <>
    <section className='ProductDetails'>
      <div className='bg-[#F9F1E7] py-9'>
        <Breadcrumb/>
      </div>
      <div className=''>
        <Details/>
        <Description/>
        <RelatedProduct/>
      </div>
    </section>
    </>
  )
}

export default ProductDetails