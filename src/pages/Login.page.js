import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import PageContainer from '../components/page/PageContainer';
import Main from '../components/page/MainContent';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import authContext from '../contexts/auth/authContext';

const LoginPage = () => {
  const [identifierValue, handleIdentifierChange] = useInputState('');
  const [passwordValue, handlePasswordChange] = useInputState('');

  const { login } = useContext(authContext);

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ identifier: identifierValue });
    login({ identifier: identifierValue, password: passwordValue });
  };

  return (
    <PageContainer>
      <div className="columns is-centered is-vcentered is-mobile login-page-columns">
        <Main title="Sign In" colSpan="half">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={identifierValue}
              label="Username or Email"
              id="identifier"
              name="identifier"
              placeholder="Enter a username or email..."
              onChange={handleIdentifierChange}
            />
            <Input
              type="password"
              value={passwordValue}
              label="Password"
              id="password"
              name="password"
              placeholder="Enter your super spicy secret password ..."
              onChange={handlePasswordChange}
            />
            <Button val="Sign in" color="success" />
          </form>
        </Main>
      </div>
    </PageContainer>
  );
};

export default LoginPage;
