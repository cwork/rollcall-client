import React from 'react';
import PageContainer from '../components/page/PageContainer';
import Main from '../components/page/MainContent';
import Input from '../components/form/Input';
import Button from '../components/form/Button';

const LoginPage = () => {
  return (
    <PageContainer>
      <Main title="Sign In">
        <form>
          <Input
            type="text"
            label="Username or Email"
            id="identifier"
            name="identifier"
            placeholder="Enter a username or email..."
          />
          <Input
            type="password"
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your super spicy secret password ..."
          />
          <Button val="Sign in" color="success" />
        </form>
      </Main>
    </PageContainer>
  );
};

export default LoginPage;
