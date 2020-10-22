import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import PageContainer from '../components/page/PageContainer';
import Main from '../components/page/MainContent';
import Aside from '../components/page/Aside';
import EmployeeCard from '../components/employee/EmployeeCard';
import EmployeeOccurrences from '../components/occurrences/EmployeeOccurrences';
import AddOccurrenceForm from '../components/occurrences/AddOccurrenceForm';
import EditEmployeeForm from '../components/employee/EditEmployeeForm';
import Button from '../components/form/Button';

const EmployeePage = () => {
  const employeeId = useParams().employeeId;
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setIsEditing] = useState(false);

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

  const handleArchive = async () => {
    console.log('archiving');
    try {
      await Axios.put(`http://localhost:5000/api/employee/${employeeId}`, {
        isActive: !employee.isActive
      });
      setIsLoading(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  const employeeName = `${employee.firstName} ${employee.lastName}`;
  return (
    <PageContainer>
      {!isLoading ? (
        <div className="columns">
          <Main title={employeeName} colSpan="8">
            <div className="content">
              <Button
                color="link"
                val={editing ? 'Cancel' : 'Edit'}
                onClick={() => setIsEditing(!editing)}
                className="mr-2"
              />
              <Button
                color="danger"
                val={employee.isActive ? 'Archive' : 'Unarchive'}
                onClick={handleArchive}
              />
            </div>
            {editing && (
              <EditEmployeeForm
                employee={employee}
                setIsLoading={setIsLoading}
              />
            )}
            <EmployeeOccurrences occurrences={employee.occurrences} />
          </Main>
          <Aside colSpan="4">
            <EmployeeCard employee={employee} />
            <AddOccurrenceForm
              employee={employee}
              setIsLoading={setIsLoading}
            />
          </Aside>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </PageContainer>
  );
};

export default EmployeePage;
