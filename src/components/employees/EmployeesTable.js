import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeesTable = ({ employees }) => {
  if (employees.length === 0) return <p>No employees have been added yet.</p>;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Occurrences</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <EmployeeRow key={employee._id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeesTable;
