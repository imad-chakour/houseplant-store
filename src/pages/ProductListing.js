import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import './ProductListing.css';

function ProductListing() {
  const products = useSelector(state => state.products.products);
  const categories = useSelector(state => state.products.categories);
  const dispatch = useDispatch();

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      {categories.map(category => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="products-grid">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => dispatch(addItemToCart(product))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;