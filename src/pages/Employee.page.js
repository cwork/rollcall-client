import React, { useEffect, useState } from 'react';
import PageContainer from '../components/page/PageContainer';
import Main from '../components/page/MainContent';
import Aside from '../components/page/Aside';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const EmployeePage = () => {
  const employeeId = useParams().employeeId;
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employee = await Axios.get(
          `http://localhost:5000/api/employee/${employeeId}`
        );
        setEmployee(employee.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error.response);
      }
    };
    fetchData();
  }, [isLoading, employeeId]);

  const employeeName = `${employee.firstName} ${employee.lastName}`;

  return (
    <PageContainer>
      <Main title={employeeName}></Main>
    </PageContainer>
  );
};

export default EmployeePage;
