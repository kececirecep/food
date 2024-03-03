import React from 'react'
import './discount.scss'

import { Row, Col } from 'react-bootstrap';

const DiscountHome = () => {
    return (
        <Row className='discountHome m-4'>
            <Col md={7} className="discountText">
                <h4>Get Discount Voucher <br /> Up To 20%</h4>
                <span className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis autem quisquam nobis quibusdam voluptate vero veniam commodi necessitatibus sapiente!</span>
            </Col>
            <Col md={4} className='d-none d-md-block'>
                <img src="/images/discount-woman.png" alt="" />
            </Col> 
        </Row>
    )
}

export default DiscountHome