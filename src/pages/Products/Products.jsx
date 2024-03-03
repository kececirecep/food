import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

import { ProductContext } from '../../context/ProductContext';

import ProductCard from '../../components/Product/Product'
import useProducts from '../../useProducts';

const Products = () => { 
    const { products, loading, error } = useProducts();
    return (
        <div>
            <Row className='d-flex m-0 p-0'>
                <Col xs={3} sm={2} md={3} lg={3} xl={3} xxl={2} className='m-0 p-0'>
                    <Aside />
                </Col>
                <Col xs={8} sm={10} md={9} lg={9} xl={9} xxl={10} className='m-0 p-0'>
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