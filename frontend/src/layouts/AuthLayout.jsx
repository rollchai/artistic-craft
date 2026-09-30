import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ROUTES } from '../constants';

export const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-card-wrapper">
        <div className="auth-header">
          <Link to={ROUTES.HOME} className="auth-brand">
            ✨ HandyCraft
          </Link>
          <p className="auth-subtitle">Discover handcrafted artistry</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
