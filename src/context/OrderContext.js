import React, { useState, createContext } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = orderItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Product already exists in the cart, update the quantity
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].amount += product.amount;
      setOrderItems(updatedOrderItems);
    } else {
      // Product doesn't exist in the cart, add a new entry
      setOrderItems([...orderItems, product]);
    }
  };
   

  return (
    <OrderContext.Provider value={{ orderItems, addToCart }}>
      {children}
    </OrderContext.Provider>
  );
};
