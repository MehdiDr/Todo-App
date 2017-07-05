import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

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
      <div className="section">
        <div className="nav">
          <h1 className="title nav-center">Todo List</h1>
        </div>
        <div className="level is-centered">
          <span>Filter : </span>
          <button className={this.state.filter === 'all' ? 'button is-dark' : 'button is-primary'} onClick={this.selectFilter.bind(this, 'all')}>All</button>
          <button className={this.state.filter === 'todo' ? 'button is-dark' : 'button is-primary'} onClick={this.selectFilter.bind(this, 'todo')}>To do</button>
          <button className={this.state.filter === 'finished' ? 'button is-dark' : 'button is-primary'} onClick={this.selectFilter.bind(this, 'finished')}>Finished</button>
          <button className={this.state.filter === 'outoftime' ? 'button is-dark' : 'button is-primary'} onClick={this.selectFilter.bind(this, 'outoftime')}>Out of time</button>
          <button className={this.state.filter === 'archived' ? 'button is-dark' : 'button is-primary'} onClick={this.selectFilter.bind(this, 'archived')}>Archived</button>
        </div>
        <ul>
          {
            this.state.todos
              .filter(item => (this.state.filter === 'todo' ? !item.finished : true))
              .filter(item => (this.state.filter === 'finished' ? item.finished : true))
              .filter(item => (this.state.filter === 'archived' ? item.archived : true))
              .filter(item => (this.state.filter === 'outoftime' ? (item.deadline && item.deadline < Date.now()) : true))
              .map((item, index) => (
                <div className="box content is-">
                  <TodoItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    deadline={item.deadline}
                    finished={item.finished}
                    archived={item.archived}
                    onClick={this.toggleFinished.bind(this, index)}
                  />
                  <button className='delete is-medium' onClick={this.deleteTodo.bind(this, index)} />
                  <button className="button is-warning"onClick={this.toggleArchived.bind(this, index)}>Archive</button>
                </div>
              ))
          }
        </ul>
        <TodoInput addTodo={this.addTodo} />
      </div>
    );
  }
}
