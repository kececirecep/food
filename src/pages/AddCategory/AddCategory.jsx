import React, { useContext, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

import { MdOutlineBookmarkAdded } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import './AddCategory.scss'

import { db,storage } from '../../firebase';
import { addDoc,collection,serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { CategoryContext } from '../../context/CategoryContext';

const AddCategory = () => {
    const category = useContext(CategoryContext)


    const [file, setFile] = useState(""); 
    const [categoryName, setCategoryName] = useState("");

    const handleAddCategory = async (e) => {
        e.preventDefault()

        
        const storageRef = ref(storage, `categoryImages/${file.name}`);
        await uploadBytes(storageRef, file);

        
        const imageUrl = await getDownloadURL(storageRef);

        const res = await addDoc(collection(db, "category"), {
            imageUrl: imageUrl,
            name: categoryName,  
            timestamp: serverTimestamp(),
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
                    <form onSubmit={handleAddCategory} className='addCategory'>

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
                            <input type="text" className="form-control" placeholder="Category Name" onChange={e => setCategoryName(e.target.value)} />
                            <label >Category Name</label>
                        </div>  
                        <button type='submit'>Add Category</button>
                    </form>

                    <div className="previous">
                        <span>
                            <MdOutlineBookmarkAdded />
                            <h2>Previously added categories</h2>
                        </span>
                        <ul>
                            {category.map((category,index)=>{
                                return(
                                    <li key={index}><IoMdCheckmark />{category.name}</li>
                                )
                            })
                            }
                            
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddCategory