import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';
import Axios from 'axios';

const EditEmployeeForm = ({ employee, setIsLoading }) => {
  const [firstName, setFirstName] = useInputState(employee.firstName);
  const [lastName, setLastName] = useInputState(employee.lastName);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:5000/api/employee/${employee._id}`, {
        firstName,
        lastName
      });
      setIsLoading(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={setFirstName}
        />
        <Input
          label="Last Name"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={setLastName}
        />
        <Button val="Save" color="primary" />
      </form>
    </div>
  );
};

export default EditEmployeeForm;
