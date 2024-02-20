import React from 'react'

import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import ContentHome from '../../components/ContentHome/ContentHome';

const Home = () => {
    return (
        <div>
            <Row className='d-flex m-0 p-0'>
                <Col style={{ maxWidth: '316px' }} className='m-0 p-0'>
                    <Aside />
                </Col>
                <Col className='m-0 p-0'>
                    <Header />
                    <ContentHome />
                </Col>
            </Row>
        </div>
    )
}

export default Home