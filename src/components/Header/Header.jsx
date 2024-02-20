import React from 'react'
import './header.scss'

import { Row, Col } from 'react-bootstrap'
import Search from './Search'
import UserImg from './UserImg'


const Header = () => {
    return (
        <div className='header d-flex justify-content-center align-items-center'>
            <Row className='w-100 '>
                <Col sm={10} className='px-4' >
                    <Search />
                </Col>
                <Col sm={2}>
                    <UserImg />
                </Col>
            </Row>
        </div>
    )
}

export default Header