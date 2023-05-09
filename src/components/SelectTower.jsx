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
    <option className="dropdown-item" key="tower" value="башня">Выберите башню</option>
    <option className="dropdown-item" key="A" value="A">Башня A</option>
    <option className="dropdown-item" key="B" value="B">Башня B</option>
  </select>
);

export default SelectTower;
