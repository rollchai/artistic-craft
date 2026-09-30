import React from 'react';

export const EmptyState = ({
  title = 'No Items Found',
  description = 'Try adjusting your search or filters.',
  action,
}) => {
  return (
    <div className="empty-state">
      <div className="empty-icon">🎨</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
};
