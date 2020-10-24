import React from 'react';
import Main from '../components/page/MainContent';
import PageContainer from '../components/page/PageContainer';
import AddUserForm from '../components/user/AddUserForm';

const AddUserPage = () => {
  return (
    <PageContainer>
      <div className="columns is-centered is-vcentered">
        <div className="column is-8">
          <Main title="Add User">
            <AddUserForm />
          </Main>
        </div>
      </div>
    </PageContainer>
  );
};

export default AddUserPage;
