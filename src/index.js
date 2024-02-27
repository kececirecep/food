import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CategoryProvider } from './context/CategoryContext';
import {  OrderProvider } from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductProvider>
        <CategoryProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CategoryProvider>
      </ProductProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
