import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../firebase';

const Settings = () => {
    const [file, setFile] = useState("");
    const [profileName, setProfileName] = useState("");


    const handleAddImg = async (e) => {
        e.preventDefault()


        const storageRef = ref(storage, `profileImages/${file.name}`);
        await uploadBytes(storageRef, file);


        const imageUrl = await getDownloadURL(storageRef);

        const res = await addDoc(collection(db, "profile"), {
            imageUrl: imageUrl,
            name:profileName,
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
                    <form onSubmit={handleAddImg} className='addCategory'>

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
                            <input type="text" className="form-control" placeholder="Profile Name" onChange={e => setProfileName(e.target.value)} />
                            <label >Profile Name</label>
                        </div>
                        <button type='submit'>Add Profile Img</button>
                    </form>

                </Col>
            </Row>
        </div>
    )
}

export default Settings