import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.archived) itemClass = 'archived ';
  if (props.finished) itemClass += 'finished ';
  if (props.deadline && props.deadline < Date.now()) itemClass += 'outoftime';

  return (
    <li className={itemClass} onClick={props.onTodoClick}>
      <p><strong>{props.name}</strong></p>
      <p><strong>{props.description}</strong></p>
      <p><em>{String(props.deadline)}</em></p>
    </li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  finished: PropTypes.bool,
  archived: PropTypes.bool,
  onTodoClick: PropTypes.func.isRequired,
};
TodoItem.defaultProps = {
  finished: false,
  archived: false,
};

export default TodoItem;
