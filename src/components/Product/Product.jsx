import React, { useContext } from 'react'
import './product.scss'

import { HiPlusSmall } from "react-icons/hi2"; 
import { OrderContext } from '../../context/OrderContext'; 

const Product = (props) => {
    
    const { addToCart } = useContext(OrderContext)
     

    const handleAddToCart = () => {
        const productInfo = { 
            id:props.id,
            amount:props.amount,
            name: props.name,
            desc: props.desc,
            price: props.price,
            imageUrl: props.imageUrl
        };

        addToCart(productInfo);
    }
 
    return (
        <div className="productCard">
            <img src={props.imageUrl} alt="" />
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <div className="priceAndCart">
                <span>${props.price}</span>
                <button className='iconPlus' onClick={handleAddToCart}><HiPlusSmall /></button>
            </div>
        </div>
    )
}

export default Product