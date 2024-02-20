import React from 'react'
import Discount from './DiscountHome'
import CategoryHome from './CategoryHome'

const ContentHome = () => {
  return (
    <div className='contentHome border'>
        <Discount/>
        <CategoryHome/>
    </div>
  )
}

export default ContentHome