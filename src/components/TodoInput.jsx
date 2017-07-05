import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.onCLickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      description: '',
      date: '',
    };
  }
  onClickBtn() {
    this.setState({
      name: '',
      description: '',
      date: '',
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.addTodo(this.state.name, this.state.description, this.state.date);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange} />
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        <button onClick={this.onClickBtn}>Add</button>
      </div>
    );
  }
}
TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
