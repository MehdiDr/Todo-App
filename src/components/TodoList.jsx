import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = props => (
  <div className="section">
    <ul>
      {
        props.todos
          .filter(item => (props.filters.todo === 'TODO' ? !item.finished : true))
          .filter(item => (props.filters.todo === 'FINISHED' ? item.finished : true))
          .filter(item => (props.filters.archived === 'ARCHIVED' ? item.archived : true))
          .filter(item => (props.filters.outoftime === 'OUTOFTIME' ? (item.deadline && item.deadline < Date.now()) : true))
          .map(item => (
            <div className="box content">
              <TodoItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                deadline={item.deadline}
                finished={item.finished}
                archived={item.archived}
                onClick={props.toggleFinished.bind(this, item.id)}
              />
              <button className="delete is-medium" onClick={props.deleteTodo.bind(this, item.id)} />
              <button className="button is-warning" onClick={props.toggleArchived.bind(this, item.id)}>{item.archived ? "Unarchive" : "Archive"}</button>
            </div>
          ))
      }
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      deadline: PropTypes.object.isRequired,
      finished: PropTypes.bool.isRequired,
      archived: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  filters: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    outoftime: PropTypes.string.isRequired,
    archived: PropTypes.string.isRequired,
  }).isRequired,
  toggleFinished: PropTypes.func.isRequired, // TODO
  toggleArchived: PropTypes.func.isRequired, // TODO
  deleteTodo: PropTypes.func.isRequired, // TODO
};

export default TodoList;
