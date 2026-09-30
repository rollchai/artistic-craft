import React from 'react';

export const Loader = ({ message = 'Loading handcrafted magic...' }) => {
  return (
    <div className="loader-container">
      <div className="spinner-ring" />
      <p className="loader-text">{message}</p>
    </div>
  );
};
