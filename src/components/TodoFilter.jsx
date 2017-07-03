import React, { PropTypes } from 'react';

const TodoFilter = (props) => {
  return (
    <div>
      <span>Filter : </span>
      <button onClick={props.selectFilter.bind(this, 'none')}>All</button>
      <button onClick={props.selectFilter.bind(this, 'todo')}>To do</button>
      <button onClick={props.selectFilter.bind(this, 'finished')}>Finished</button>
      <button>Out of time</button>
      <button>Archived</button>
    </div>
  );
};
TodoFilter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
};
export default TodoFilter;
