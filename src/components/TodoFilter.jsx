import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = props => (
  <div>
    <span>Filter : </span>
    <button onClick={props.selectFilter.bind(this, 'none')}>All</button>
    <button onClick={props.selectFilter.bind(this, 'todo')}>To do</button>
    <button onClick={props.selectFilter.bind(this, 'finished')}>Finished</button>
    <button onClick={props.selectFilter.bind(this, 'overtime')}>Out of time</button>
    <button onClick={props.selectFilter.bind(this, 'archived')}>Archived</button>
  </div>
);
TodoFilter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
};
export default TodoFilter;
