import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let name, description, deadline;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(name.value, description.value, deadline.value));
        name.value = '';
        description.value = '';
        deadline.value = '';
      }}
    >
      <div className="field">
        <label htmlFor="name" className="label">Name : </label>
        <input ref={(value) => { name = value; }} className="input" type="text" name="name" />
      </div>
      <div className="field">
        <label htmlFor="description" className="label">Description : </label>
        <input ref={(value) => { description = value; }} className="input" type="text" name="description" />
      </div>
      <div className="field">
        <label htmlFor="deadline" className="label">Deadline : </label>
        <input ref={(value) => { deadline = value; }} className="input" type="date" name="deadline" />
      </div>
      <button className="button is-primary" type="submit">Add</button>
    </form>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
