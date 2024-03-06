// App.js
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

import Products from './components/Products';
import Cart from './components/Cart';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Electronics Store</h1>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
}


