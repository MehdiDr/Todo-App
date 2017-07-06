import { connect } from 'react-redux';
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.finished);
    case 'SHOW_ARCHIVED':
      return todos.filter(t => t.archived);
    case 'SHOW_OUTOFTIME':
      return todos.filter(t => t.outoftime);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (key) => {
      dispatch(toggleTodo(key))
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
