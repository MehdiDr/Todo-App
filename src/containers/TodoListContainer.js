import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todos,
  filters: {
    todo: '',
    outoftime: '',
    archived: '',
  },
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: () => {},
  toggleFinished: (id) => {
    dispatch(toggleTodo(id));
  },
  toggleArchived: () => {},
  deleteTodo: () => {},
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
