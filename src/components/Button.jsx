import React from 'react';

const Button = ({ label, onClick, variant = 'default', className = '' }) => {
  const getButtonStyles = () => {
    const baseStyles = 'h-16 rounded-2xl font-semibold text-lg transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md';
    
    switch (variant) {
      case 'operator':
        return `${baseStyles} lmnt-theme-on-secondary text-white hover:opacity-90`;
      case 'equals':
        return `${baseStyles} lmnt-theme-on-primary text-white hover:opacity-90`;
      case 'function':
        return `${baseStyles} lmnt-theme-on-surface`;
      default:
        return `${baseStyles} lmnt-theme-on-background hover:bg-opacity-90`;
    }
  };

  const getBackgroundStyle = () => {
    switch (variant) {
      case 'operator':
        return { backgroundColor: 'var(--lmnt-theme-secondary)' };
      case 'equals':
        return { backgroundColor: 'var(--lmnt-theme-primary)' };
      case 'function':
        return { backgroundColor: 'var(--lmnt-theme-surface-variant)' };
      default:
        return { backgroundColor: '#f5f5f5' };
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonStyles()} ${className}`}
      style={getBackgroundStyle()}
    >
      {label}
    </button>
  );
};

export default Button;