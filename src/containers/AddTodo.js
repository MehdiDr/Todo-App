import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let name, description, deadline;

  return (
    <div className="field">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(name.value, description.value, deadline.value));
          name.value = '';
          description.value = '';
          deadline.value = '';
        }}
      >
        <label htmlFor="name" className="label">Name : </label>
        <input ref={(value) => { name = value; }} className="input" type="text" placeholder="name" name="name" /><br /><br />
        <label htmlFor="description" className="label">Description : </label>
        <input ref={(value) => { description = value; }} className="input" type="text" name="description" placeholder="description" /><br /><br />
        <label htmlFor="deadline" className="label">Deadline : </label>
        <input ref={(value) => { deadline = value; }} className="input" type="date" name="deadline" /><br /><br />
        <button className="button is-primary" type="submit">Add</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
