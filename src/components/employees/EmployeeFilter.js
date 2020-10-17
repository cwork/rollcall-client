import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';

const EmployeeFilter = ({ filterText, setFilterText, resetFilterText }) => {
  return (
    <div className="box">
      <Input
        type="text"
        value={filterText}
        onChange={setFilterText}
        label="Filter Employees"
        placeholder="Type employee first or last name..."
      />
      <Button onClick={resetFilterText} val="Clear" />
    </div>
  );
};

export default EmployeeFilter;
