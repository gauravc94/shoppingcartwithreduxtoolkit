// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increase, decrease } from '../productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const cartCount = cart.reduce((acc, product) => acc += product.count, 0);
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.count, 0).toFixed(2);
  const navigate = useNavigate()

  return (
    <div className="cart">
      <nav className="nav">
        <button onClick={()=>navigate("/")}>Products</button>
        <button onClick={()=>navigate("/cart")}>Cart <span>({cartCount})</span></button>
      </nav>
      <div className="cart-products-container">
      {cart.map((pd) => (
        <div className="cart-product-card" key={pd.id}>
          <div>
            <img className="cartproduct-poster" src={pd.thumbnail} alt={pd.title} />
            <h3>{pd.title}</h3>
            <p>{pd.description}</p>
            <h4>Price: ${pd.price}</h4>
          </div>
          <div className="cart-product-details">
            <p>Quantity: {pd.count}</p>
            <div>
              <button className="btn btn-decrease" onClick={() => dispatch(decrease(pd.id))}>-</button>
              <button className="btn btn-remove" onClick={() => dispatch(removeFromCart(pd.id))}>Remove</button>
              <button className="btn btn-increase" onClick={() => dispatch(increase(pd.id))}>+</button>
            </div>
            <h3>SubTotal: ${(pd.price * pd.count).toFixed(2)}</h3>
          </div>
        </div>
      ))}
      </div>
      <h2>Total Quantity: {cartCount} items, Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default Cart;
