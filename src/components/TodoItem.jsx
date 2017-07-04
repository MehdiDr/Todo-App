import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.finished) itemClass = 'finished';
  if (props.deadline < Date.now()) itemClass = 'overtime';
  if (props.archived) itemClass = 'archived'

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
  finished: PropTypes.bool.isRequired,
  archived: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoItem;
