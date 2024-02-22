import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

import './AddProducts.scss'

import { db } from '../../firebase'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const AddProducts = () => {

    const [productName, setProductName] = useState("");

    const handleAddProduct = async(e) => {
        e.preventDefault()

        const res = await addDoc(collection(db, "product"), {
            name: productName,
            state: "CA",
            country: "USA"
        });   
        console.log(res.id);
    }
     

    return (
        <div>
            <Row className='d-flex m-0 p-0'>
                <Col style={{ maxWidth: '316px' }} className='m-0 p-0'>
                    <Aside />
                </Col>
                <Col className='m-0 p-0'>
                    <Header />
                    <form onSubmit={handleAddProduct} className='addProducts'>
                        <div className="mb-3">
                            <label for="formFile" className="form-label">Select Image</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Product Name" onChange={e=>setProductName(e.target.value)} />
                            <label >Product Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" placeholder="Product Price" />
                            <label >Product Price</label>
                        </div>
                        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                            <label >Product Price</label>
                            <option selected>Open this select category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <button type='submit'>Add Product</button>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default AddProducts