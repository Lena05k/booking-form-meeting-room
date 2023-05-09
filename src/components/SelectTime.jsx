import React from 'react';

const TimeInterval = () => (
  <>
    <option value="">Выберите время</option>
    {
      [...Array(10)].map((_, i) => (
        <option key={i} value={`${i + 10}:00-${i + 11}:00`}>
          {`${i + 10}:00-${i + 11}:00`}
        </option>
      ))
    }
  </>
);

const SelectTime = (props) => (
  <select
    id="setTime"
    onChange={props.onChange}
    className="block-select"
    value={props.value}
  >
    <TimeInterval />
  </select>
);

export default SelectTime;
