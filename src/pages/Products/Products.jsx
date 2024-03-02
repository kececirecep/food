import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

import { ProductContext } from '../../context/ProductContext';

import ProductCard from '../../components/Product/Product'

const Products = () => {
    const products = useContext(ProductContext);
    return (
        <div>
            <Row className='d-flex m-0 p-0'>
                <Col style={{ maxWidth: '316px' }} className='m-0 p-0'>
                    <Aside />
                </Col> 
                <Col className='m-0 p-0'>
                    <Header />
                    <div className='d-flex justify-content-start flex-wrap gap-2 p-4'>
                        {products.map((product, index) => (
                            <ProductCard key={index} id={product.id} amount={product.amount} imageUrl={product.imageUrl} name={product.name} desc={product.desc} price={product.price} />
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Products