import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = (props) => {
  return (
    <div className="level is-centered">
      <span>Filter : </span>
      <button className={props.filters.todo === 'TODO' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'To do')}>To do</button>
      <button className={props.filters.todo === 'FINISHED' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'Finished')}>Finished</button>
      <button className={props.filters.outoftime === 'OUTOFTIME' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'Out of time')}>Out of time</button>
      <button className={props.filters.archived === 'ARCHIVED' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'Archived')}>Archived</button>
    </div>
  );
};

TodoFilter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};

export default TodoFilter;
