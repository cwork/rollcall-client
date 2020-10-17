import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';

const EmployeeFilter = () => {
  const [filterValue, setFilterValue, resetFilter] = useInputState('');
  return (
    <div className="box">
      <Input
        type="text"
        value={filterValue}
        onChange={setFilterValue}
        label="Filter Employees"
        placeholder="Type employee first or last name..."
      />
      <Button onClick={resetFilter} val="Clear" />
    </div>
  );
};

export default EmployeeFilter;
