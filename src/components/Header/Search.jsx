import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    return (
        <form className="d-flex justify-content-center align-items-center search">
            <span><IoSearchOutline /></span>
            <input className="form-control me-2" type="search" placeholder="Search products, voucher, price..." aria-label="Search" />
        </form>
    )
}

export default Search