import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.finished) itemClass = 'finished';

  return (
    <div>
      <li className={itemClass} onClick={props.onClick}>{props.label}</li>
    </div>
  );
};
export default TodoItem;
