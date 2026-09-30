import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col">
          <h3>HandyCraft</h3>
          <p>Connecting authentic local artisans with art connoisseurs worldwide.</p>
        </div>
        <div className="footer-col">
          <h4>Marketplace</h4>
          <ul>
            <li><Link to={ROUTES.PRODUCTS}>All Products</Link></li>
            <li><Link to={ROUTES.ARTISTS}>Featured Artists</Link></li>
            <li><Link to={ROUTES.CUSTOM_ARTWORK}>Request Custom Art</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><Link to={ROUTES.ADMIN}>Admin Portal</Link></li>
            <li><Link to={ROUTES.ORDERS}>Track Orders</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HandyCraft Marketplace. Handcrafted with passion.</p>
      </div>
    </footer>
  );
};
