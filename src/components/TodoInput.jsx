import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
      todoDate:"",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onClickBtn = () => {
    this.setState({
      todoName: "",
      todoDate: "",
    });
    this.props.addTodo(this.state.todoName, this.state.todoDate)
  }
  render() {
    return(
      <div>
        <input type="text" name="todoName" value={this.state.todoName} onChange={this.handleChange} />
        <input type="date" name="todoDate" value={this.state.todoDate} onChange={this.handleChange}  />
        <button onClick={this.onClickBtn}>Add</button>
      </div>
    )
  }
}
TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
