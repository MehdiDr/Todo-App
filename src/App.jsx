import React, { Component } from 'react';
import TodoComponents from './containers/TodoComponents';

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <h1 className="title nav-center">Todo List</h1>
        </div>
        <TodoComponents />
      </div>
    );
  }
}
export default App;
