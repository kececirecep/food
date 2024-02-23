import React from 'react'
import Discount from './DiscountHome'
import CategoryHome from './CategoryHome'
import Product from '../Product/Product'

const ContentHome = () => {
  return (
    <div className='contentHome border'>
        <Discount/>
        <CategoryHome/>
        <Product/>
    </div>
  )
}

export default ContentHome