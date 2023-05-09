import React from 'react';

const SelectTower = (props) => (
  <select
    onChange={props.onChange}
    className="block-select"
    as="select"
    name="setTower"
    id="setTower"
    value={props.value}
  >
    <option className="dropdown-item" key="tower" value="башня">Башня</option>
    <option className="dropdown-item" key="A" value="A">A</option>
    <option className="dropdown-item" key="B" value="B">B</option>
  </select>
);

export default SelectTower;
