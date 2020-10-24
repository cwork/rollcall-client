import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../components/form/Button';
import Main from '../components/page/MainContent';
import PageContainer from '../components/page/PageContainer';
import EditUserForm from '../components/user/EditUserForm';
import Aside from '../components/page/Aside';

const Me = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const renderableKeys = ['firstName', 'lastName', 'username', 'email'];
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(`http://localhost:5000/api/auth/me`);
        setUser(res.data.user);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [isLoading]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <PageContainer>
      <Main title={`Hello, ${user.firstName}`}>
        <div className="box">
          <h3 className="has-text-size-4 mb-4">Details</h3>
          <ul>
            {renderableKeys.map((key, i) => (
              <li className="mb-2" key={i}>
                <strong>
                  {key === 'firstName'
                    ? 'first name: '
                    : key === 'lastName'
                    ? 'last name: '
                    : `${key}: `}
                </strong>
                {user[key]}
              </li>
            ))}
          </ul>
          <Button
            color={editing ? 'warning' : 'link'}
            val={editing ? 'Cancel' : 'Edit'}
            onClick={() => setEditing(!editing)}
          />
        </div>
      </Main>
      {editing && (
        <Aside>
          <EditUserForm
            user={user}
            setIsLoading={setIsLoading}
            setEditing={setEditing}
          />
        </Aside>
      )}
    </PageContainer>
  );
};

export default Me;
