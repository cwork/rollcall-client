import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { formatDate } from '../../utils/occurrences';

const OccurrenceRow = ({ occurrence }) => {
  const [isCovered, setIsCovered] = useState(occurrence.isCovered);
  const employeeId = useParams().employeeId;
  const handleChange = async occurrence => {
    try {
      await Axios.put(
        `http://localhost:5000/api/employee/${employeeId}/occurrence/${occurrence._id}`,
        {
          isCovered: !occurrence.isCovered
        }
      );
      setIsCovered(!isCovered);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <tr>
      <td>{formatDate(occurrence.dateOf)}</td>
      <td>
        <input
          type="checkbox"
          className="checkbox"
          checked={isCovered}
          onChange={() => handleChange(occurrence)}
        />
      </td>
      <td>{occurrence.isActive ? 'Active' : 'Inactive'}</td>
      <td>{occurrence.note}</td>
    </tr>
  );
};

export default OccurrenceRow;
