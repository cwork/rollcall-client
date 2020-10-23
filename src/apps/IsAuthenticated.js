import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeesPage from '../pages/Employees.page';
import EmployeePage from '../pages/Employee.page';
import EditOccurrence from '../pages/EditOccurrence';

const IsAuthenticated = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EmployeesPage} />
        <Route exact path="/employee/:employeeId" component={EmployeePage} />
        <Route
          exact
          path="/employee/:employeeId/occurrence/:occurrenceId"
          component={EditOccurrence}
        />
      </Switch>
    </Router>
  );
};

export default IsAuthenticated;
