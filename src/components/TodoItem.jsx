import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.finished) itemClass = 'finished';

  return (
    <div>
      <li className={itemClass} onClick={props.onClick}>{props.name}<br />{props.description}<br />{props.deadline}</li>
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoItem;
