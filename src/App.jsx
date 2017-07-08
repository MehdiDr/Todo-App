import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <h1 className="title nav-center">Todo List</h1>
        </div>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
