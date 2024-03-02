import React, { useEffect, useState } from 'react'
import { PiBasketLight } from "react-icons/pi";
import { BsBoxes } from "react-icons/bs";
import { CiCreditCard1, CiCirclePlus, CiSettings, CiLogout, CiHome } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <ul className='menu p-0'>
      <NavLink to="/">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <RxDashboard />
            </span>
          ) : (
            <>
              <span className="icon">
                <RxDashboard />
              </span>
              Dashboard
            </>
          )}
        </li>
      </NavLink> 

      <NavLink to="/orders">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <PiBasketLight />
            </span>
          ) : (
            <>
              <span className="icon">
                <PiBasketLight />
              </span>
              Orders
            </>
          )}
        </li>
      </NavLink> 

      <NavLink to="/products">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <BsBoxes />
            </span>
          ) : (
            <>
              <span className="icon">
                <BsBoxes />
              </span>
              Products
            </>
          )}
        </li>
      </NavLink> 

      <NavLink to="/addProducts">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <CiCirclePlus />
            </span>
          ) : (
            <>
              <span className="icon">
                <CiCirclePlus />
              </span>
              Add Products
            </>
          )}
        </li>
      </NavLink> 

      <NavLink to="/addCategory">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <CiCirclePlus />
            </span>
          ) : (
            <>
              <span className="icon">
                <CiCirclePlus />
              </span>
              Add Category
            </>
          )}
        </li>
      </NavLink> 

      <NavLink to="/wallet">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <CiCreditCard1 />
            </span>
          ) : (
            <>
              <span className="icon">
                <CiCreditCard1 />
              </span>
              My wallets
            </>
          )}
        </li>
      </NavLink> 

      <NavLink to="/settings">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <CiSettings />
            </span>
          ) : (
            <>
              <span className="icon">
                <CiSettings />
              </span>
              Settings
            </>
          )}
        </li>
      </NavLink> 

      <NavLink to="/login">
        <li>
          {windowWidth <= 1000 ? (
            <span className="icon">
              <CiLogout />
            </span>
          ) : (
            <>
              <span className="icon">
                <CiLogout />
              </span>
              Log out
            </>
          )}
        </li>
      </NavLink> 

    
    </ul>
  )
}

export default Menu