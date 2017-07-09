import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import AddTodo from './containers/AddTodo';
import TodoFilterContainer from './containers/TodoFilterContainer';
import TodoListContainer from './containers/TodoListContainer';
import reducers from './reducers/index';

const enhancer = compose(
  persistState(),
);

const store = createStore(reducers, enhancer);

const App = () => (
  <Provider store={store}>
    <div>
      <div className="nav">
        <h1 className="title nav-center">Todo List</h1>
      </div>
      <AddTodo />
      <hr />
      <TodoFilterContainer />
      <hr />
      <TodoListContainer />
    </div>
  </Provider>
);

export default App;
