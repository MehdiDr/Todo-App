import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.finished) itemClass = 'finished';

  return (
    <div>
      <li className={itemClass} onClick={props.onClick}>{props.label}<br />{props.deadline}</li>
    </div>
  );
};

TodoItem.propTypes = {
  label: PropTypes.string.isRequired,
  deadline: PropTypes.number.isRequired,
  finished: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoItem;
