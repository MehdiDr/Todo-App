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
    const todos = this.state.todos;
    return (
      <div className="App">
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {
            this.state.todos.map((todo, index) => {
              return (<li>{todo}</li>)
            })
          }
        </ul>
        <div>
          <span>Filter : </span>
          <button>All</button>
          <button>To do</button>
          <button>Finished</button>
          <button>Out of time</button>
          <button>Archived</button>
        </div>
      </div>
    );
  }
}
export default App;
