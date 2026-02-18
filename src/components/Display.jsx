import React from 'react';

const Display = ({ value, operation }) => {
  return (
    <div className="p-8 text-right" style={{ backgroundColor: 'var(--lmnt-theme-primary)', minHeight: '140px' }}>
      {operation && (
        <div className="text-sm mb-2 lmnt-theme-on-primary-inactive font-medium">
          {operation}
        </div>
      )}
      <div className="text-5xl font-bold lmnt-theme-on-primary break-all leading-tight">
        {value}
      </div>
    </div>
  );
};

export default Display;