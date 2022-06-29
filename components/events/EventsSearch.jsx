import { useState, useRef } from 'react';
import Button from '../ui/Button';
import classes from './EventsSearch.module.css';
import PropTypes from 'prop-types';

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const seletedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(seletedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandle}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2021">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">Februlary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

EventsSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default EventsSearch;
