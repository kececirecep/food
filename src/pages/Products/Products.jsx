import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

import { ProductContext } from '../../context/ProductContext';

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
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <h2>{product.name} </h2>
                                <img src={product.imageUrl} alt="" />
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Products