import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.lastName}</td>
      <td>{employee.firstName}</td>
      <td>{employee.occurrences.length}</td>
      <td>
        <Link to={`/employee/${employee._id}`}>View</Link>
      </td>
    </tr>
  );
};

export default EmployeeRow;
