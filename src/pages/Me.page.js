import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from '../components/page/MainContent';
import PageContainer from '../components/page/PageContainer';

const Me = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <PageContainer>
      <Main title={`Hello, ${user.firstName}`}></Main>
    </PageContainer>
  );
};

export default Me;
