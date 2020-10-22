import React from 'react';

const ActiveControl = ({ showAll, handleInputChange }) => {
  return (
    <form className="p-2 has-background-warning">
      <label htmlFor="toggle" className="label">
        Hide inactive employees
      </label>
      <input
        type="checkbox"
        className="checkbox"
        checked={!showAll}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default ActiveControl;
