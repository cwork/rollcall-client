import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';
import Axios from 'axios';

const AddEmployeeForm = ({ setIsLoading }) => {
  const [
    firstNameValue,
    setFirstNameValue,
    resetFirstNameValue
  ] = useInputState('');
  const [lastNameValue, setLastNameValue, resetLastNameValue] = useInputState(
    ''
  );

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:5000/api/employee', {
        firstName: firstNameValue,
        lastName: lastNameValue
      });
    } catch (error) {}
    resetFirstNameValue();
    resetLastNameValue();
    setIsLoading(true);
  };

  return (
    <div className="box">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          label="First name"
          placeholder="Enter employees first name..."
          value={firstNameValue}
          onChange={setFirstNameValue}
        />
        <Input
          type="text"
          id="lastName"
          name="lastName"
          label="Last name"
          placeholder="Enter employees last name..."
          value={lastNameValue}
          onChange={setLastNameValue}
        />
        <Button color="link" val="Add" />
      </form>
    </div>
  );
};

export default AddEmployeeForm;
