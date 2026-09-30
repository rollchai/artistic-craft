import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';

export const MainLayout = () => {
  return (
    <div className="layout-root">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
