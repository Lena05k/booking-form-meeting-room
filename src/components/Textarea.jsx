import React from 'react';

const Textarea = (props) => (
  <textarea
    onChange={props.onChange}
    id="setComment"
    name="setComment"
    className="input-textarea"
    placeholder="Коментарий"
    rows={4}
    cols={30}
    value={props.value}
  />
);

export default Textarea;
