import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = props => (
  <div>
    <p><strong>Filters : </strong></p>
    <div className="field is-grouped">
      <p className="control">
        <a className={props.filters.todo === 'TODO' ? 'button is-dark' : 'button is-light'} onClick={() => props.onFilterClick('To do')}>To do</a>
      </p>
      <p className="control">
        <a className={props.filters.todo === 'FINISHED' ? 'button is-dark' : 'button is-light'} onClick={() => props.onFilterClick('Finished')}>Finished</a>
      </p>
      <p className="control">
        <a className={props.filters.outoftime === 'OUTOFTIME' ? 'button is-dark' : 'button is-light'} onClick={() => props.onFilterClick('Out of time')}>Out of time</a>
      </p>
      <p className="control">
        <a className={props.filters.archived === 'ARCHIVED' ? 'button is-dark' : 'button is-light'} onClick={() => props.onFilterClick('Archived')}>Archived</a>
      </p>
    </div>
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
