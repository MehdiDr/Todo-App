import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.archived) itemClass = 'archived';
  else if (props.finished) itemClass = 'finished';
  else if (props.deadline < Date.now()) itemClass = 'overtime';

  return (
    <div>
      <li className={itemClass} onClick={props.onClick}>
        <p>Name : </p> {props.name}
        <p>Description : </p>{props.description}
        <p>DeadLine : </p>{props.deadline}
      </li>
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  finished: PropTypes.bool,
  archived: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default TodoItem;
