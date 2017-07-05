import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.archived) itemClass = 'archived';
  if (props.finished) itemClass = 'finished';
  if (props.deadline < Date.now()) itemClass = 'overtime';

  return (
    <div>
      <li className={itemClass} onClick={props.onClick}>
        <p>Name : {props.name}</p>
        <p>Description : {props.description}</p>
        <p>DeadLine : {props.deadline}</p>
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
TodoItem.defaultProps = {
  finished: false,
  archived: false,
};

export default TodoItem;
