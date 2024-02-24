import React, { useContext } from 'react'
import Discount from './DiscountHome'
import CategoryHome from './CategoryHome'
import ProductCard from '../Product/Product'
import { ProductContext } from '../../context/ProductContext'

const ContentHome = () => {
  const products = useContext(ProductContext);

  return (
    <div className='contentHome border'>
      <Discount />
      <CategoryHome />
      <div className='d-flex justify-content-start flex-wrap gap-2 p-4'>
        {products.map((product, index) => (
          <ProductCard key={index} imageUrl={product.imageUrl} name={product.name} desc={product.desc} price={product.price} />
        ))}
      </div>
    </div>
  )
}

export default ContentHome