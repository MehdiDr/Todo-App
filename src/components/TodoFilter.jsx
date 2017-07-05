import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = props => (
  <div>
    <span>Filter : </span>
    <button onClick={props.selectFilter.bind('none')}>All</button>
    <button onClick={props.selectFilter.bind('todo')}>To do</button>
    <button onClick={props.selectFilter.bind('finished')}>Finished</button>
    <button onClick={props.selectFilter.bind('overtime')}>Out of time</button>
    <button onClick={props.selectFilter.bind('archived')}>Archived</button>
  </div>
);
TodoFilter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
};
export default TodoFilter;
