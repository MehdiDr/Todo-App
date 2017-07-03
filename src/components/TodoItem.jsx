import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.finished) itemClass = 'finished';

  return (
    <div>
      <li className={itemClass}>{props.label}</li>
      <input type="checkbox" onClick={props.onClick} />
    </div>
  );
};
export default TodoItem;
