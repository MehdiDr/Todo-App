import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.handleClickBtn = this.handleClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      description: '',
      deadline: '',
    };
  }
  handleClickBtn() {
    this.props.addTodo({
      name: this.state.name,
      description: this.state.description,
      deadline: new Date(this.state.deadline),
    });
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
      <div className="field is-half">
        <input className="input" type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <input className="input" type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange} />
        <input className="input" type="date" name="deadline" value={this.state.deadline} onChange={this.handleChange} />
      <button className="button is-primary" onClick={this.handleClickBtn}>Add</button>
      </div>
    );
  }
}
TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
