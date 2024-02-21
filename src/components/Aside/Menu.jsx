import React from 'react'
import { PiBasketLight } from "react-icons/pi";
import { BsBoxes } from "react-icons/bs";
import { CiCreditCard1, CiCirclePlus , CiSettings, CiLogout, CiHome } from "react-icons/ci";  
import { RxDashboard } from "react-icons/rx"; 
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className='menu p-0'>
      <NavLink to="/"><li><span><RxDashboard /></span> Dashboard</li></NavLink>
      <NavLink to="/orders"><li><span><PiBasketLight /></span> Orders</li></NavLink>
      <NavLink to="/products"><li><span><BsBoxes /></span> Products</li></NavLink>
      <NavLink to="/addProducts"><li><span><CiCirclePlus  /></span> Add Products</li></NavLink>
      <NavLink to="/wallet"><li><span><CiCreditCard1 /></span> My wallets</li></NavLink>
      <NavLink to="/settings"><li><span><CiSettings /></span> Settings</li></NavLink>
      <NavLink to="/login"><li><span><CiLogout /></span> Log out</li></NavLink>
    </ul>
  )
}

export default Menu