import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';
import Axios from 'axios';

const EditEmployeeForm = ({ employee, setIsLoading }) => {
  const [hireDate, setDate] = useState(new Date());
  const [firstName, setFirstName] = useInputState(employee.firstName);
  const [lastName, setLastName] = useInputState(employee.lastName);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    console.log('getting hire date');
    setDate(new Date(employee.hiredAt));
  }, [employee.hiredAt]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:5000/api/employee/${employee._id}`, {
        firstName,
        lastName,
        hiredAt: hireDate
      });
      setIsLoading(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDelete = async () => {
    try {
      await Axios.delete(`http://localhost:5000/api/employee/${employee._id}`);
      setDeleted(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  if (deleted) return <Redirect to="/" />;

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
        <div className="control mb-4">
          <label htmlFor="hireDate" className="label">
            Hire Date
          </label>
          <DatePicker
            id="hireDate"
            name="hireDate"
            selected={hireDate}
            onChange={hireDate => setDate(hireDate)}
            todayButton="Today"
            className="input"
          />
        </div>
        <Button type="submit" val="Save" color="primary" className="mr-2" />
        <Button
          type="button"
          val="Delete"
          color="danger"
          onClick={handleDelete}
        />
      </form>
    </div>
  );
};

export default EditEmployeeForm;
