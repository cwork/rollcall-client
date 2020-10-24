import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';

const AddUserForm = () => {
  const [username, setUsername, clearUsername] = useInputState('');
  const [email, setEmail, clearEmail] = useInputState('');

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Username"
        id="username"
        name="username"
        placeholder="Enter a username"
        onChange={username}
      />
      <Input
        type="text"
        label="Email"
        id="email"
        name="username"
        placeholder="Enter an email address"
        onChange={email}
      />
      <Button color="link" val="Add" />
    </form>
  );
};

export default AddUserForm;
