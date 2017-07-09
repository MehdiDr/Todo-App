import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
  let itemClass = '';
  if (props.archived) itemClass = 'archived ';
  if (props.finished) itemClass += 'finished ';
  if (props.deadline && props.deadline < Date.now()) itemClass += 'outoftime';

  return (
    <div>
      <li className={itemClass} onClick={props.onTodoClick}>
        <p><strong>{props.name}</strong></p>
        <p><strong>{props.description}</strong></p>
        {Object.prototype.toString.call(props.deadline) === '[object Date]' && !isNaN(props.deadline.getTime()) ? (<p><em>DeadLine : {String(props.deadline)}</em></p>) : ''}
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
  onTodoClick: PropTypes.func.isRequired,
};
TodoItem.defaultProps = {
  finished: false,
  archived: false,
};

export default TodoItem;
