import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.finished) itemClass = 'finished';

  return (
    <li className={itemClass} onClick={props.onClick}>{props.label}</li>
  );
};

export default TodoItem;
