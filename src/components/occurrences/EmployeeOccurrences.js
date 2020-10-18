import React from 'react';
import { sortByDate, formatDate } from '../../utils/occurrences';

const EmployeeOccurrences = ({ occurrences }) => {
  const sortedOccurrences = sortByDate(occurrences);
  if (occurrences.length === 0) {
    return (
      <div className="box">
        <p>This employee has not accrrued any occurrences!</p>
      </div>
    );
  }
  return (
    <div className="occurrences">
      <h3>Occurrences</h3>
      <table className="table is-full-width">
        <thead>
          <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {sortedOccurrences.map(occurrence => (
            <tr>
              <td>{formatDate(occurrence.dateOf)}</td>
              <td>{occurrence.isCovered ? 'Covered' : 'Not covered'}</td>
              <td>{occurrence.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeOccurrences;
