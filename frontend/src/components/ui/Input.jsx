import React from 'react';

export const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input className={`input-control ${error ? 'input-error' : ''} ${className}`} {...props} />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};
