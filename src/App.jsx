import React, { Component } from 'react';
import TodoComponents from './containers/TodoComponents';
import createHistory from 'history/createBrowserHistory';

import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <HashRouter history={history}>
        <div>
          <div className="nav">
            <h1 className="title nav-center">Todo List</h1>
          </div>
          <TodoComponents />
        </div>
      </HashRouter>
    );
  }
}
export default App;
