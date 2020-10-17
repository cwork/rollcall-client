import React from 'react';

const Button = ({ color, val, onClick }) => {
  return (
    <button
      className={`button ${color ? `is-${color}` : ''}`}
      onClick={onClick}
    >
      {val}
    </button>
  );
};

export default Button;
