import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="app-header">
      <nav>
        <Link to="/" className="logo">GreenLeaf</Link>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-link">
            Cart ({totalQuantity})
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;