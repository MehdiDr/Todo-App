import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
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
