import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';
import TodoInput from '../components/TodoInput';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleArchived = this.toggleArchived.bind(this);
    this.toggleFinished = this.toggleFinished.bind(this);
    this.state = {
      todos: [],
      filter: 'all',
    };
  }
  // Function to add task on the list
  addTodo(value) {
    const todos = this.state.todos;
    todos.push(value);
    this.setState({
      todos,
    });
  }
  // Function to delete task
  deleteTodo(index) {
    const todos = this.state.todos;
    this.state.todos.splice(index, 1);
    this.setState({
      todos,
    });
  }
  // Change status of the task to finished
  toggleFinished(index) {
    const selectedTodo = this.state.todos[index];
    selectedTodo.finished = !selectedTodo.finished;
    this.setState({
      todos: this.state.todos,
    });
  }
  // Change status of the task to archived
  toggleArchived(index) {
    const selectedTodo = this.state.todos[index];
    selectedTodo.archived = true;
    this.setState({
      todos: this.state.todos,
    });
  }
  selectFilter(status) {
    this.setState({
      filter: status,
    });
  }
  render() {
    return(
      <div>
        <TodoFilter status={this.state.filter} selectFilter={this.selectFilter} />
        <TodoList todos={this.state.todos}
                  filter={this.state.filter}
                  toggleFinished={this.toggleFinished}
                  deleteTodo={this.deleteTodo}
                  toggleArchived={this.toggleArchived}
                />
        <TodoInput addTodo={this.addTodo} />
      </div>
    )
  }
}
