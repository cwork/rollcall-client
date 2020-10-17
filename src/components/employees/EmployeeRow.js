import React from 'react';

const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.occurrences.length}</td>
    </tr>
  );
};

export default EmployeeRow;
