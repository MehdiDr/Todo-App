import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = props => (
  <div>
    <span>Filter : </span>
    <button onClick={props.selectFilter('none')}>All</button>
    <button onClick={props.selectFilter('todo')}>To do</button>
    <button onClick={props.selectFilter('finished')}>Finished</button>
    <button onClick={props.selectFilter('overtime')}>Out of time</button>
    <button onClick={props.selectFilter('archived')}>Archived</button>
  </div>
);
TodoFilter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
};
export default TodoFilter;
