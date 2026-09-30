import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <Link to={ROUTES.HOME} className="brand-logo">
          <span className="brand-icon">✨</span>
          <span className="brand-title">HandyCraft</span>
        </Link>
        <nav className="nav-links">
          <NavLink to={ROUTES.PRODUCTS} className={({ isActive }) => (isActive ? 'active' : '')}>
            Explore Art
          </NavLink>
          <NavLink to={ROUTES.CATEGORIES} className={({ isActive }) => (isActive ? 'active' : '')}>
            Categories
          </NavLink>
          <NavLink to={ROUTES.ARTISTS} className={({ isActive }) => (isActive ? 'active' : '')}>
            Artists
          </NavLink>
          <NavLink to={ROUTES.CUSTOM_ARTWORK} className={({ isActive }) => (isActive ? 'active' : '')}>
            Custom Orders
          </NavLink>
        </nav>
        <div className="nav-actions">
          <Link to={ROUTES.WISHLIST} className="action-link" title="Wishlist">❤️</Link>
          <Link to={ROUTES.CART} className="action-link" title="Cart">🛒</Link>
          <Link to={ROUTES.LOGIN} className="btn btn-outline btn-sm">Sign In</Link>
        </div>
      </div>
    </header>
  );
};
