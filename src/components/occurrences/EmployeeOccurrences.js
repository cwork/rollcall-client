import React from 'react';

const EmployeeOccurrences = ({ occurrences }) => {
  return (
    <div className="occurrences">
      <h3>Occurrences</h3>
      <div className="columns">
        {occurrences.map(occurrence => {
          return <div className="card">{occurrence.date}</div>;
        })}
      </div>
    </div>
  );
};

export default EmployeeOccurrences;
