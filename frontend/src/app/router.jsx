import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants';
import { MainLayout, AuthLayout, AdminLayout } from '../layouts';
import { HomePage, NotFoundPage } from '../pages';
import AdminOverview from '../features/admin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <HomePage />,
      },
      {
        path: ROUTES.CATEGORIES,
        element: <HomePage />,
      },
      {
        path: ROUTES.ARTISTS,
        element: <HomePage />,
      },
      {
        path: ROUTES.CUSTOM_ARTWORK,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <div>Login Form Placeholder</div>,
      },
      {
        path: ROUTES.REGISTER,
        element: <div>Register Form Placeholder</div>,
      },
    ],
  },
  {
    path: ROUTES.ADMIN,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminOverview />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);

export default router;
