import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import EmployeesTable from '../components/employees/EmployeesTable';
import Main from '../components/page/MainContent';
import PageContainer from '../components/page/PageContainer';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get('http://localhost:5000/api/employee');
        setEmployees(res.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error.response.data.message);
      }
    };
    fetchData();
  }, [isLoading]);

  return (
    <PageContainer>
      <Main title="Employees">
        <EmployeesTable employees={employees} />
      </Main>
    </PageContainer>
  );
};

export default EmployeesPage;
