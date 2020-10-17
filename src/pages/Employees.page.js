import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import EmployeesTable from '../components/employees/EmployeesTable';
import Main from '../components/page/MainContent';
import Aside from '../components/page/Aside';
import PageContainer from '../components/page/PageContainer';
import AddEmployeeForm from '../components/employees/AddEmployeeForm';
import EmployeeFilter from '../components/employees/EmployeeFilter';
import useInputState from '../hooks/useInputState';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [filterText, setFilterText, resetFilterText] = useInputState('');
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

  const filteredEmployees = employees.filter(employee => {
    return (
      employee.firstName.toLowerCase().startsWith(filterText.toLowerCase()) ||
      employee.lastName.toLowerCase().startsWith(filterText.toLowerCase())
    );
  });

  return (
    <PageContainer>
      <div className="columns">
        <Main title="Employees" colSpan="8">
          <EmployeeFilter
            filterText={filterText}
            setFilterText={setFilterText}
            resetFilterText={resetFilterText}
          />
          <EmployeesTable employees={filteredEmployees} />
        </Main>
        <Aside colSpan="4">
          <AddEmployeeForm setIsLoading={setIsLoading} />
        </Aside>
      </div>
    </PageContainer>
  );
};

export default EmployeesPage;
