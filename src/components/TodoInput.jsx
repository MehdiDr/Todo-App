import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date: "",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onClickBtn = () => {
    this.setState({
      name: "",
      description: "",
      date: "",
    });
    this.props.addTodo(this.state.name, this.state.description, this.state.date)
  }
  render() {
    return(
      <div>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange}  />
        <button onClick={this.onClickBtn}>Add</button>
      </div>
    )
  }
}
TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
