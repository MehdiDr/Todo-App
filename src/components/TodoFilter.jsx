import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = props => (
  <div className="level is-centered">
    <span>Filter : </span>
    <button className={props.filters.todo === 'TODO' ? 'button is-dark' : 'button is-primary'} onClick={() => props.onFilterClick('To do')}>To do</button>
    <button className={props.filters.todo === 'FINISHED' ? 'button is-dark' : 'button is-primary'} onClick={() => props.onFilterClick('Finished')}>Finished</button>
    <button className={props.filters.outoftime === 'OUTOFTIME' ? 'button is-dark' : 'button is-primary'} onClick={() => props.onFilterClick('Out of time')}>Out of time</button>
    <button className={props.filters.archived === 'ARCHIVED' ? 'button is-dark' : 'button is-primary'} onClick={() => props.onFilterClick('Archived')}>Archived</button>
  </div>
);

TodoFilter.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    outoftime: PropTypes.string.isRequired,
    archived: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoFilter;
