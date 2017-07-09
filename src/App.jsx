import React from 'react';
import AddTodo from './containers/AddTodo';
import TodoFilterContainer from './containers/TodoFilterContainer';
import TodoListContainer from './containers/TodoListContainer';

const App = () => (
  <div>
    <div className="nav">
      <h1 className="title nav-center">Todo List</h1>
    </div>
    <TodoFilterContainer />
    <TodoListContainer />
    <AddTodo />
  </div>
);

export default App;
