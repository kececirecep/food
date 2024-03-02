import React, { useState, createContext } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = orderItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {

      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].amount += product.amount;
      setOrderItems(updatedOrderItems);
    } else {

      setOrderItems([...orderItems, product]);
    }
  };

  const removeToCart = (productId) => {
    const updatedOrderItems = orderItems.filter((item) => item.id !== productId);
    setOrderItems(updatedOrderItems)
  }

  const allClear=(product)=>{
    setOrderItems([]);
  }


  return (
    <OrderContext.Provider value={{ orderItems, addToCart, removeToCart,allClear }}>
      {children}
    </OrderContext.Provider>
  );
};
