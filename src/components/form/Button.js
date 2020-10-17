import React from 'react';

const Button = ({ color, val }) => {
  return (
    <button className={`button ${color ? `is-${color}` : ''}`}>{val}</button>
  );
};

export default Button;
