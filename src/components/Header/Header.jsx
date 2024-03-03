import React from 'react'
import './header.scss'

import { Row, Col } from 'react-bootstrap'
import Search from './Search'
import UserImg from './UserImg'
import HeaderCartButton from './HeaderCartButton'


const Header = () => {
    return (
        <div className='header d-flex justify-content-center align-items-center'>
            <Row className='w-100 '>
                <Col xs={9} sm={10} className='px-4' >
                    <Search />
                </Col>
                <Col xs={3} sm={2} className=''>
                    <HeaderCartButton />
                </Col> 
            </Row>
        </div>
    )
}

export default Header