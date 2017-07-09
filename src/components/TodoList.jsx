import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = props => (
  <div className="section">
    <ul>
      {props.todos.map(item => (
        <div className="box content">
          <TodoItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            deadline={item.deadline}
            finished={item.finished}
            archived={item.archived}
            onTodoClick={() => props.onTodoClick(item.id)}
          />
          <button className="delete is-medium" onClick={() => props.onDeleteClick(item.id)} />
          <button className="button is-warning" onClick={() => props.onArchiveClick(item.id)}>{item.archived ? 'Unarchive' : 'Archive'}</button>
        </div>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      deadline: PropTypes.object.isRequired, // TODO
      finished: PropTypes.bool.isRequired,
      archived: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onArchiveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired, // TODO
};

export default TodoList;
