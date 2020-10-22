import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="card mb-4">
      <header className="card-header">
        <p className="card-header-title is-size-4">{employee.firstName}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <ul>
            <li>Status: {employee.isActive ? 'Active' : 'Inactive'}</li>
            <li>
              Hire date:{' '}
              {employee.hiredAt
                ? new Date(employee.hiredAt).toLocaleDateString()
                : 'No hire date set'}
            </li>
            <li>
              Occurrences:{' '}
              {employee.occurrences ? employee.occurrences.length : 0}
            </li>
          </ul>
        </div>
      </div>
      <footer className="card-footer">
        {/* <a href="/" className="card-footer-item has-background-danger">
          Deactivate
        </a> */}
      </footer>
    </div>
  );
};

export default EmployeeCard;
