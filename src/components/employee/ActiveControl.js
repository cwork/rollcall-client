import React from 'react';

const ActiveControl = ({ showAll, handleInputChange }) => {
  return (
    <form className="p-2 has-background-warning">
      <div className="field is-horizontal">
        <div className="field-label">
          <label htmlFor="toggle" className="label">
            Hide inactive
          </label>
        </div>
        <div className="field-body">
          <div>
            <input
              type="checkbox"
              className="checkbox"
              checked={!showAll}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ActiveControl;
