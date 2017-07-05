import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = (props) => {
  return (
    <div className="level is-centered">
      <span>Filter : </span>
      <button className={props.filter === 'all' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'all')}>All</button>
      <button className={props.filter === 'todo' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'todo')}>To do</button>
      <button className={props.filter === 'finished' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'finished')}>Finished</button>
      <button className={props.filter === 'outoftime' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'outoftime')}>Out of time</button>
      <button className={props.filter === 'archived' ? 'button is-dark' : 'button is-primary'} onClick={props.selectFilter.bind(this, 'archived')}>Archived</button>
    </div>
  );
};

TodoFilter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodoFilter;
