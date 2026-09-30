import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ROUTES } from '../constants';

export const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <Link to={ROUTES.HOME}>✨ HandyCraft</Link>
          <span className="admin-tag">Admin</span>
        </div>
        <nav className="admin-nav">
          <Link to={ROUTES.ADMIN}>Dashboard</Link>
          <Link to={ROUTES.PRODUCTS}>Manage Products</Link>
          <Link to={ROUTES.ORDERS}>Manage Orders</Link>
          <Link to={ROUTES.ARTISTS}>Manage Artists</Link>
          <Link to={ROUTES.HOME}>Back to Store</Link>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
