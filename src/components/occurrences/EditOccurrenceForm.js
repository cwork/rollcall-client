import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Input from '../form/Input';
import Button from '../form/Button';
import useInputState from '../../hooks/useInputState';
import 'react-datepicker/dist/react-datepicker.css';
import Axios from 'axios';

const AddOccurrenceForm = ({ employee, setIsLoading }) => {
  const [date, setDate] = useState(new Date());
  const [covered, setCovered] = useInputState(false);
  const [note, setNote] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.post(
        `http://localhost:5000/api/employee/${employee._id}/occurrence`,
        {
          dateOf: date,
          isCovered: covered,
          note
        }
      );
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(true);
  };

  return (
    <div className="box">
      <h3 className="is-size-4">Add Occurrence</h3>
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
              <Input
                type="checkbox"
                label="Covered"
                className="checkbox"
                id="isCovered"
                name="isCovered"
                value={covered}
                onChange={setCovered}
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
        <Button val="Add" color="is-primary" />
      </form>
    </div>
  );
};

export default AddOccurrenceForm;
