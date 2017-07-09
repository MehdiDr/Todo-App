import { connect } from 'react-redux';
import { toggleTodo, toggleArchived } from '../actions';
import TodoList from '../components/TodoList';

const filterTodos = (todos, filters) =>
  todos.filter(item => (filters.todo === 'TODO' ? !item.finished : true))
       .filter(item => (filters.todo === 'FINISHED' ? item.finished : true))
       .filter(item => (filters.archived === 'ARCHIVED' ? item.archived : true))
       .filter(item => (filters.outoftime === 'OUTOFTIME' ? (item.deadline && item.deadline < Date.now()) : true));

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.filters),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
  onArchiveClick: (id) => {
    dispatch(toggleArchived(id));
  },
  onDeleteClick: (id) => {
    // TODO
  },
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
