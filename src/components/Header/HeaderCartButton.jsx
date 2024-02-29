import React, { useContext, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Offcanvas } from 'react-bootstrap';
import './HeaderCartButton.scss';
import { OrderContext } from '../../context/OrderContext';

const HeaderCartButton = () => {
  const { orderItems } = useContext(OrderContext)


  const [showCart, setShowCart] = useState(false);

  const handleCartClose = () => setShowCart(false);


  const myButtonStyle = {
    fontSize: "36px"
  };

  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0);
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
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                <img src={item.imageUrl} alt="" />
                <p>Name: {item.name}</p>
                <p>Description: {item.desc}</p>
                <p>Price: ${item.price}</p>
                <p>Amount : {item.amount}</p>  
              </li>
            ))}
          </ul>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};


export default HeaderCartButton;
