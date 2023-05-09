import React from 'react';
import '../App.css';

const Number = () => {
  const items = [];
  for (let i = 3; i <= 27; i += 1) {
    items.push(<option className="dropdown-item" key={i} value={i}>{i}</option>);
  }
  return items;
};

const SelectedFloors = (props) => (
  <select
    className="block-select"
    onChange={props.onChange}
    as="select"
    name="setFloor"
    id="setFloor"
    value={props.value}
  >
    <option className="dropdown-item" key="tower" value="tower">Выберите этаж</option>
    <Number />
  </select>
);

export default SelectedFloors;
