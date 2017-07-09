import { connect } from 'react-redux';
import { selectFilter } from '../actions';
import TodoFilter from '../components/TodoFilter';

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  onFilterClick: (buttonClicked) => {
    dispatch(selectFilter(buttonClicked));
  },
});

const TodoFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoFilter);

export default TodoFilterContainer;
