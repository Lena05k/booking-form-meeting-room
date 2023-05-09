import React from 'react';
import '../App.css';

const Number = () => {
  const items = [];
  for (let i = 1; i <= 10; i += 1) {
    items.push(<option className="dropdown-item" key={i} value={i}>{i}</option>);
  }
  return items;
};

const SelectNegotiation = (props) => (
  <select
    className="block-select"
    onChange={props.onChange}
    as="select"
    name="setNegotiation"
    id="setNegotiation"
    value={props.value}
  >
    <option className="dropdown-item" key="сonversation" value="сonversation">Переговор</option>
    <Number />
  </select>
);
export default SelectNegotiation;
