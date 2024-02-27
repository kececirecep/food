import React, { useState, createContext } from 'react'

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderItems, setOrderItems] = useState([]);

    const addToCart = (product) => {
        setOrderItems([...orderItems, product])
    }

    return (
        <OrderContext.Provider value={{ orderItems, addToCart }}>
            {children}
        </OrderContext.Provider>
    )
}

