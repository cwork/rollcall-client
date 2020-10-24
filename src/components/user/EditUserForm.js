import Axios from 'axios';
import React, { useState } from 'react';
import useInputState from '../../hooks/useInputState';
import Button from '../form/Button';
import Input from '../form/Input';

const EditUserForm = ({ user, setIsLoading, setEditing }) => {
  const [firstName, setFirstName] = useInputState(user.firstName);
  const [lastName, setLastName] = useInputState(user.lastName);
  const [username, setUsername] = useInputState(user.username);
  const [email, setEmail] = useInputState(user.email);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:5000/api/user/${user._id}`, {
        firstName,
        lastName,
        username,
        email
      });
      setIsLoading(true);
      setEditing(false);
    } catch (error) {
      console.log('error', error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="First name"
        id="firstName"
        name="firstName"
        placeholder="Enter a first name..."
        value={firstName}
        onChange={setFirstName}
      />
      <Input
        type="text"
        label="Last name"
        id="lastName"
        name="lastName"
        placeholder="Enter a last name..."
        value={lastName}
        onChange={setLastName}
      />
      <Input
        type="text"
        label="Username"
        id="username"
        name="username"
        placeholder="Enter a new username..."
        value={username}
        onChange={setUsername}
      />
      <Input
        type="text"
        label="Email"
        id="email"
        name="email"
        placeholder="Enter a new email..."
        value={email}
        onChange={setEmail}
      />

      <Button type="submit" color="link" val="Update" className="mr-2" />
      <Button
        type="button"
        color="warning"
        val="Cancel"
        onClick={() => setEditing(false)}
      />
    </form>
  );
};

export default EditUserForm;
