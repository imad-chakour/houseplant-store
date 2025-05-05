import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;