import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeesPage from '../pages/Employees.page';

const IsAuthenticated = () => {
  return <EmployeesPage />;
};

export default IsAuthenticated;
