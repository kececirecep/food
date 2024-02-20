import React from 'react'
import { PiBasketLight } from "react-icons/pi";
import { BsBoxes } from "react-icons/bs";
import { CiCreditCard1, CiCircleInfo, CiSettings, CiLogout, CiHome } from "react-icons/ci"; 
import { RxDashboard } from "react-icons/rx";

const Menu = () => {
  return (
    <ul className='menu p-0'>
      <li className='active'><span><RxDashboard /></span> Dashboard</li>
      <li><span><PiBasketLight /></span> Orders</li>
      <li><span><BsBoxes /></span> Products</li>
      <li><span><CiCreditCard1 /></span> My wallets</li>
      <li><span><CiCircleInfo /></span> İnfo</li>
      <li><span><CiSettings /></span> Settings</li>
      <li><span><CiLogout /></span> Log out</li>
    </ul>
  )
}

export default Menu