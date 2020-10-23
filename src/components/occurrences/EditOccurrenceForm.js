import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from '../form/Button';
import 'react-datepicker/dist/react-datepicker.css';
import Axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';

const EditOccurrenceForm = () => {
  const [date, setDate] = useState(new Date());
  const [covered, setCovered] = useState(false);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const employeeId = useParams().employeeId;
  const occurrenceId = useParams().occurrenceId;

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        `http://localhost:5000/api/employee/${employeeId}/occurrence/${occurrenceId}`
      );
      setDate(new Date(res.data.data.dateOf));
      setCovered(res.data.data.isCovered);
      setNote(res.data.data.note);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.put(
        `http://localhost:5000/api/employee/${employeeId}/occurrence/${occurrenceId}`,
        {
          dateOf: date,
          isCovered: covered,
          note
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  if (submitted) return <Redirect to={`/employee/${employeeId}`} />;

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="columns">
            <div className="column">
              <label htmlFor="date" className="label">
                Date
              </label>
              <DatePicker
                id="date"
                name="date"
                selected={date}
                onChange={date => setDate(date)}
                todayButton="Today"
                className="input"
              />
            </div>
            <div className="column">
              <label className="label" htmlFor="isCovered">
                OSL
              </label>
              <input
                type="checkbox"
                className="checkbox"
                id="isCovered"
                value={covered}
                checked={covered}
                onChange={() => setCovered(!covered)}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="note" className="label">
              Note
            </label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Enter a note about the absence..."
                value={note}
                onChange={e => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Button val="Update" color="primary" />
      </form>
    </div>
  );
};

export default EditOccurrenceForm;
