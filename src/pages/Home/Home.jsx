import React from 'react'

import { Row, Col, Container } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import ContentHome from '../../components/ContentHome/ContentHome';

const Home = () => {
     
    return (
        <div>
            <Row className='d-flex m-0 p-0'>
                <Col xs={3} sm={2} md={3} lg={3} xl={3} xxl={2} className='m-0 p-0'>
                    <Aside className='w-100 h-100' />
                </Col>
                <Col xs={9} sm={10} md={9} lg={9} xl={9} xxl={10} className='m-0 p-0'>
                    <Header />
                    <ContentHome />
                </Col>
            </Row>
        </div>
    )
}

export default Home
