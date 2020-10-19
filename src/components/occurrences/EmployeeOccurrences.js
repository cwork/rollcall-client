import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { markActive } from '../../utils/occurrences';
import OccurrenceRow from './OccurrenceRow';

const EmployeeOccurrences = () => {
  const employeeId = useParams().employeeId;
  const [sortedOccurrences, setSortedOccurrences] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `http://localhost:5000/api/employee/${employeeId}/occurrence`
        );
        setSortedOccurrences(markActive(res.data.data));
        setIsChanged(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [employeeId, isChanged]);
  if (sortedOccurrences.length === 0) {
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
            <OccurrenceRow
              occurrence={occurrence}
              setIsChanged={setIsChanged}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeOccurrences;
