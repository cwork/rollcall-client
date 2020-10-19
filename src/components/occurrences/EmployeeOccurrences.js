import React from 'react';
import { markActive } from '../../utils/occurrences';
import OccurrenceRow from './OccurrenceRow';

const EmployeeOccurrences = ({ occurrences }) => {
  const sortedOccurrences = markActive(occurrences);
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
            <th>OSL</th>
            <th>Active</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {sortedOccurrences.map(occurrence => (
            <OccurrenceRow occurrence={occurrence} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeOccurrences;
