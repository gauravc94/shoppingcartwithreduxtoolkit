// Products.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  const cart = useSelector((state) => state.products.cart);
  const cartCount = cart.reduce((acc, product) => acc += product.count, 0);
  const navigate = useNavigate()

  return (
    <div className="products">
      <nav className="nav">
        <button onClick={()=>navigate("/")}>Products</button>
        <button onClick={()=>navigate("/cart")}>Cart <span>({cartCount})</span></button>
      </nav>
      <div className="products-container">
        {productList.map((pd) => (
          <div key={pd.id} className="product-card">
            <img className="product-poster" src={pd.thumbnail} alt={pd.title} />
            <div>
              <h3>{pd.title}</h3>
              <p>{pd.description}</p>
              <h4>Price: $ {pd.price}</h4>
              <button className="product-addToCart-btn" onClick={() => dispatch(addToCart(pd))}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
