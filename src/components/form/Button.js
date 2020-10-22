import React from 'react';

const Button = ({ type, color, val, onClick, className }) => {
  const colorVariant = color ? `is-${color}` : '';
  return (
    <button
      type={type ? type : 'submit'}
      className={`button ${colorVariant} ${className ? `${className}` : ''}`}
      onClick={onClick}
    >
      {val}
    </button>
  );
};

export default Button;
