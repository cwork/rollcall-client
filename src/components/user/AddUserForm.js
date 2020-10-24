import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';
import { generateRandomPassword } from '../../utils/passwords';
import Axios from 'axios';

const AddUserForm = () => {
  const [username, setUsername, clearUsername] = useInputState('');
  const [email, setEmail, clearEmail] = useInputState('');
  const [firstName, setFirstName, clearFirstName] = useInputState('');
  const [lastName, setLastName, clearLastName] = useInputState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:5000/api/user', {
        firstName,
        lastName,
        username,
        email,
        password: generateRandomPassword()
      });
      clearEmail();
      clearUsername();
      clearFirstName();
      clearLastName();
    } catch (error) {
      console.log(error.response);
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
        placeholder="Enter a username"
        value={username}
        onChange={setUsername}
      />
      <Input
        type="text"
        label="Email"
        id="email"
        name="username"
        placeholder="Enter an email address"
        value={email}
        onChange={setEmail}
      />
      <Button color="link" val="Add" />
    </form>
  );
};

export default AddUserForm;
