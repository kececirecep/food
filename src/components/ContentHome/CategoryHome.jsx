import React from 'react'
import './category.scss'


import { Row, Col } from 'react-bootstrap';

import { BsArrowRightCircle } from "react-icons/bs";


const CategoryHome = () => {
    return (
        <Row className='m-4 p-0 gap-2 categoryCardHomeContainer'>
            <h2>Category</h2>
            <Col sm={2} className="categoryCardHome">
                <img src="/images/category/burger.png" alt="" />
                <h4>Bakery</h4>
            </Col>
            <Col sm={2} className="categoryCardHome">
                <img src="/images/category/coffee-cup.png" alt="" />
                <h4>Bakery</h4>
            </Col>
            <Col sm={2} className="categoryCardHome">
                <img src="/images/category/lobster.png" alt="" />
                <h4>Bakery</h4>
            </Col>
            <Col sm={2} className="categoryCardHome">
                <img src="/images/category/pizza.png" alt="" />
                <h4>Bakery</h4>
            </Col>
            <Col sm={2} className="categoryCardHome">
                <img src="/images/category/salad.png" alt="" />
                <h4>Bakery</h4>
            </Col> 
            <Col sm={1}>
                <span className='categoryCardHomeArrow'><BsArrowRightCircle /></span>
            </Col>
        </Row>
    )
}

export default CategoryHome