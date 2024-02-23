import React from 'react'
import './product.scss'

const Product = () => {
    return (
        <div className="productCard">
            <img src="https://media.istockphoto.com/id/511095807/tr/foto%C4%9Fraf/homemade-italian-gnocchi-with-red-sauce.jpg?s=1024x1024&w=is&k=20&c=FkG8yl26Czc3qviaQcOJDwZ62xvseQY6IhEl_3oSa0A=" alt="" />
            <h2>Food’s Name 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, officia?</p>
            <div className="price"></div>
        </div>
    )
}

export default Product