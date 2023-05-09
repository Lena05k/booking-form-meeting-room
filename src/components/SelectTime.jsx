import React from 'react';

const SelectTime = (props) => {
  const interval = 40;
  const startTime = 9 * 60;
  const endTime = 22 * 60;

  const options = Array.from(
    { length: (endTime - startTime) / interval },
    (v, k) => ({
      label: `${Math.floor((startTime + k * interval) / 60)}:${((startTime + k * interval) % 60).toString().padStart(2, '0')}`,
      value: startTime + k * interval,
    }),
  );

  return (
    <select
      id="setTime"
      onChange={props.onChange}
      className="block-select"
      value={props.value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectTime;
