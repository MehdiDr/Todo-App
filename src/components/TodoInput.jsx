import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    }
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }
  onClickBtn = () => {
    this.setState({
      inputValue: "",
    });
    this.props.addTodo(this.state.inputValue)
  }
  render() {
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.onClickBtn}>Add</button>
      </div>
    )
  }
}
TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
