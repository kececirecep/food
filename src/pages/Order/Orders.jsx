import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { GrTrash } from "react-icons/gr";
import { Col, Row } from 'react-bootstrap'
import Aside from '../../components/Aside/Aside'
import { OrderContext } from '../../context/OrderContext'

import { SlBasket } from "react-icons/sl";



import './Orders.scss'
import { NavLink } from 'react-router-dom';

const Orders = () => {
    const { orderItems, removeToCart } = useContext(OrderContext)

    const calculateTotalPrice = () => {
        return orderItems.reduce((total, item) => {
            return total + item.price * item.amount;
        }, 0);
    }


    return (
        <div>
            <Row className='d-flex m-0 p-0'>
                <Col xs={3} sm={2} md={3} lg={3} xl={3} xxl={2} className='m-0 p-0'>
                    <Aside />
                </Col>
                <Col xs={9} sm={10} md={9} lg={9} xl={9} xxl={10} className='m-0 p-0'>
                    <Header />
                    <Row className='m-0 p-0'>
                        <Col lg={12} xxl={8}>
                            {orderItems && orderItems.length > 0 ?
                                orderItems.map((item, index) => {
                                    return (
                                        <div key={index} className="containerOrderCard">
                                            <div className='d-flex align-items-center gap-4 imgText'>
                                                <img src={item.imageUrl} alt="" />
                                                <h2>{item.name}</h2>
                                            </div>
                                            <div className='d-flex align-items-center gap-4'>
                                                <span>x{item.amount}</span>
                                                <span>${item.price}</span>
                                                <span className='removeIcon' onClick={() => removeToCart(item.id)}><GrTrash /></span>
                                            </div>

                                        </div>
                                    )
                                })
                                :
                                <div className='emptyCart'>
                                    <div className='d-flex justify-content-center align-items-center gap-4 emptyD'>
                                        <span><SlBasket /></span>
                                        <h2>There are no products in your cart.</h2>
                                    </div>
                                    <NavLink to="/products" className='startShopping'>Start Shopping</NavLink>
                                </div>
                            }
                        </Col>
                        {orderItems.length > 0 ?
                            <Col lg={4} md={12}>
                                <div className='summary'>
                                    <h2>Total Price: <span>${calculateTotalPrice()}</span> </h2>
                                </div>
                            </Col>
                            :
                            ""
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Orders