import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>GreenLeaf Plants</h1>
      <p>Bring nature indoors with our premium houseplant collection</p>
      <Link to="/products" className="get-started-btn">Get Started</Link>
    </div>
  );
}

export default LandingPage;