import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeItemFromCart, 
  addItemToCart,
  deleteItemFromCart 
} from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

function ShoppingCart() {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      <h2>Your Cart ({totalQuantity} items)</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(removeItemFromCart(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(addItemToCart(item))}>+</button>
                  </div>
                  <p>Total: ${item.totalPrice.toFixed(2)}</p>
                  <button 
                    className="delete-btn"
                    onClick={() => dispatch(deleteItemFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button className="checkout-btn">Checkout (Coming Soon)</button>
            <Link to="/products" className="continue-shopping">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;