import React from 'react';

const Input = props => {
  return (
    <div className="field">
      <label htmlFor={props.id} className="label">
        {props.label}
      </label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
