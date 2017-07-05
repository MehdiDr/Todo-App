import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: [],
      filter: 'all',
    };
  }
  // Add task
  addTodo(value) {
    const todos = this.state.todos;
    todos.push(value);
    this.setState({
      todos,
    });
  }
  // Delete task
  deleteTodo(index) {
    const todos = this.state.todos;
    this.state.todos.splice(index, 1);
    this.setState({
      todos,
    });
  }
  // Change state
  toggleFinished(index) {
    const selectedTodo = this.state.todos[index];
    selectedTodo.finished = !selectedTodo.finished;
    this.setState({
      todos: this.state.todos,
    });
  }
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
    return (
      <div>
        <div>
          <span>Filter : </span>
          <button className={this.state.filter === 'all' ? 'pressed' : ''} onClick={this.selectFilter.bind(this, 'all')}>All</button>
          <button className={this.state.filter === 'todo' ? 'pressed' : ''} onClick={this.selectFilter.bind(this, 'todo')}>To do</button>
          <button className={this.state.filter === 'finished' ? 'pressed' : ''} onClick={this.selectFilter.bind(this, 'finished')}>Finished</button>
          <button className={this.state.filter === 'outoftime' ? 'pressed' : ''} onClick={this.selectFilter.bind(this, 'outoftime')}>Out of time</button>
          <button className={this.state.filter === 'archived' ? 'pressed' : ''} onClick={this.selectFilter.bind(this, 'archived')}>Archived</button>
        </div>
        <ul>
          {
            this.state.todos
              .filter(item => (this.state.filter === 'todo' ? !item.finished : true))
              .filter(item => (this.state.filter === 'finished' ? item.finished : true))
              .filter(item => (this.state.filter === 'archived' ? item.archived : true))
              .filter(item => (this.state.filter === 'outoftime' ? (item.deadline && item.deadline < Date.now()) : true))
              .map((item, index) => (
                <div>
                  <TodoItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    deadline={item.deadline}
                    finished={item.finished}
                    archived={item.archived}
                    onClick={this.toggleFinished.bind(this, index)}
                  />
                  <button onClick={this.deleteTodo.bind(this, index)}>Delete</button>
                  <button onClick={this.toggleArchived.bind(this, index)}>Archive</button>
                </div>
              ))
          }
        </ul>
        <TodoInput addTodo={this.addTodo} />
      </div>
    );
  }
}
