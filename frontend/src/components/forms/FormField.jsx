import React from 'react';

export const FormField = ({ label, error, children, required }) => {
  return (
    <div className="form-field">
      {label && (
        <label className="form-label">
          {label} {required && <span className="required-star">*</span>}
        </label>
      )}
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};
