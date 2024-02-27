import React, { useContext, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Offcanvas } from 'react-bootstrap';
import './HeaderCartButton.scss';
import { OrderContext } from '../../context/OrderContext';

const HeaderCartButton = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClose = () => setShowCart(false);

  const { orderItems, addToCart } = useContext(OrderContext);

  if (!orderItems) {
    console.error("OrderContext is not provided properly.");
    return null;
  }

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
        <span className='badge'>{orderItems.length}</span>
      </button>

      <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h2>Sipariş Sepeti</h2>
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                <h2>{item.name}</h2>
                <img src={item.imageUrl} width="150px" alt="" />
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};


export default HeaderCartButton;
