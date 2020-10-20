import React from 'react';

const Button = ({ type, color, val, onClick }) => {
  return (
    <button
      type={type ? type : 'submit'}
      className={`button ${color ? `is-${color}` : ''}`}
      onClick={onClick}
    >
      {val}
    </button>
  );
};

export default Button;
