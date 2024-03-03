import React, { useContext, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

import './AddProducts.scss'
import { db, storage } from '../../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { CategoryContext } from '../../context/CategoryContext';  

import { v4 as uuidv4 } from 'uuid';

const AddProducts = () => {
    const category = useContext(CategoryContext)

    const [file, setFile] = useState("");
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(""); 
    const [amount, setAmount] = useState(1);
 
     

    const handleAddProduct = async (e) => {
        e.preventDefault()


        const storageRef = ref(storage, `productImages/${file.name}`);
        await uploadBytes(storageRef, file);
 

        const imageUrl = await getDownloadURL(storageRef);

        const res = await addDoc(collection(db, "product"), { 
            id:uuidv4(),
            amount:amount,
            imageUrl: imageUrl,
            name: productName,
            desc: productDesc,
            price: productPrice,
            category: selectedCategory, 
            timestamp: serverTimestamp(),
        });
        console.log(res);
    }


    return (
        <div>
            <Row className='d-flex m-0 p-0'>
                <Col style={{ maxWidth: '316px' }} className='m-0 p-0 '>
                    <Aside />
                </Col>
                <Col className='m-0 p-0'>
                    <Header />
                    <form onSubmit={handleAddProduct} className='addProducts'>

                        <div className="formInput">
                            <label htmlFor="file">
                                <img
                                    className='w-25 mb-4'
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    }
                                    alt=""
                                />
                            </label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Product Name" onChange={e => setProductName(e.target.value)} />
                            <label >Product Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Product Desc" onChange={e => setProductDesc(e.target.value)} />
                            <label >Product Desc</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" placeholder="Product Price" onChange={e => setProductPrice(e.target.value)} />
                            <label >Product Price</label>
                        </div>
                        <select
                            className="form-select form-select-md mb-3"
                            aria-label=".form-select-lg example"
                            value={selectedCategory}
                            onChange={e => setSelectedCategory(e.target.value)}
                        >
                            <label >Product Category</label>
                            <option defaultValue>Select a category</option>
                            {category.map((category,index) => { 
                                return (
                                    <option value={category.name} key={index}>
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                        <button type='submit'>Add Product</button>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default AddProducts