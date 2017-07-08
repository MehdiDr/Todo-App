import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoInput from './TodoInput';

const Todos = props => (
  <div>
    <TodoInput onAddTodo={props.addTodo} />
    <TodoList todos={props.todos} filter={props.filter} selectItem={props.onTodoClick} />
    <TodoFilter status={props.filter} onSelectFilter={props.filterTodo} />
  </div>
);

Todos.propTypes = {
  addTodo: PropTypes.func.isRequired, // TODO
  onTodoClick: PropTypes.func.isRequired, // TODO
  filter: PropTypes.func.isRequired, // TODO
  todos: PropTypes.array.isRequired,
  filterTodo: PropTypes.func.isRequired, // TODO
};
export default Todos;
