import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      description: '',
      deadline: '',
    };
  }
  onClickBtn() {
    this.props.addTodo(this.state);
    this.setState({
      name: '',
      description: '',
      deadline: '',
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange} />
        <input type="date" name="deadline" value={this.state.deadline} onChange={this.handleChange} />
        <button onClick={this.onClickBtn}>Add</button>
      </div>
    );
  }
}
TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
