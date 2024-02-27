import React, { useContext, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Offcanvas } from 'react-bootstrap';
import './HeaderCartButton.scss';

const HeaderCartButton = () => {

  const [showCart, setShowCart] = useState(false);

  const handleCartClose = () => setShowCart(false);

  const myButtonStyle = {
    fontSize: "36px"
  };

  return (
    <div className="cart mt-2">
      <button
        type='button'
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        onClick={() => setShowCart(true)}
      >
        <MdShoppingCart style={myButtonStyle} />
        <span className='badge'>0</span>
      </button>

      <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> 
          
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default HeaderCartButton;
