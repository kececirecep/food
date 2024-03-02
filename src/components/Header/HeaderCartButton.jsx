import React, { useContext, useState } from 'react';
import { MdShoppingCart, MdOutlineClose } from 'react-icons/md';
import { Offcanvas } from 'react-bootstrap';
import './HeaderCartButton.scss';
import { OrderContext } from '../../context/OrderContext';
import { NavLink } from 'react-router-dom';



const HeaderCartButton = () => {
  const { orderItems, removeToCart, allClear } = useContext(OrderContext)


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
        <Offcanvas.Header closeButton className='shopBox'>
          <Offcanvas.Title >Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {orderItems.map((item, index) => {
            return (
              <div key={index} className='shoppingCart d-flex justify-content-between'>
                <img src={item.imageUrl} alt="" />
                <div className="d-flex justify-content-end flex-column product">
                  <p className='productName'>{item.name}</p>
                  <span className='d-flex justify-content-end gap-2'>
                    <p>${item.price}</p>
                    <p>x{item.amount}</p>
                  </span>
                </div>
                <span className='removeIcon' onClick={() => removeToCart(item.id)}><MdOutlineClose /></span>
              </div>
            )
          })
          }
          <p className='totalAmount'>Total Price:<span>${calculateTotalPrice()}</span> </p>
          <div className="buttons">
            <button className='allClearOrder' onClick={() => allClear(orderItems)}>All Clear</button>
            <NavLink to="/orders" className='viewOrder'>View Order</NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};


export default HeaderCartButton;
