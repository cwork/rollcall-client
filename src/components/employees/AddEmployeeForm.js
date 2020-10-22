import React, { useState } from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';

const AddEmployeeForm = ({ setIsLoading }) => {
  const [date, setDate] = useState(new Date());
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
        lastName: lastNameValue,
        hiredAt: date
      });
    } catch (error) {}
    resetFirstNameValue();
    resetLastNameValue();
    setIsLoading(true);
  };

  return (
    <div className="box">
      <h2 className="is-size-4">Add Employee</h2>
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
        <div className="control mb-4">
          <label htmlFor="hireDate" className="label">
            Hire Date
          </label>
          <DatePicker
            id="hireDate"
            name="hireDate"
            selected={date}
            onChange={date => setDate(date)}
            todayButton="Today"
            className="input"
          />
        </div>
        <Button color="link" val="Add" />
      </form>
    </div>
  );
};

export default AddEmployeeForm;
