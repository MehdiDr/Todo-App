import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    };
  }

  addTodo = () => {
    const todos = this.state.todos;
    this.state.todos.push(this.state.inputValue);
    this.setState({
      todos,
      inputValue: '',
    });
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li>{this.state.todos}</li>
        </ul>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button onClick={this.addTodo}>Add</button>
        </div>
      </div>
    );
  }
}
export default App;
