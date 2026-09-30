import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { Button } from '../components/ui';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The handcrafted treasure you are looking for does not exist or has been moved.</p>
        <Link to={ROUTES.HOME}>
          <Button variant="primary">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
