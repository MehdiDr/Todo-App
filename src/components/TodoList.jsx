import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'none',
    };
  }
  // Add task
  addTodo(value1, value2, value3) {
    const todos = this.state.todos;
    todos.push({
      name: value1,
      description: value2,
      deadline: value3,
    });
    this.setState({
      todos,
    });
  }
  // Delete task
  deleteTodo(e) {
    const todos = this.state.todos;
    const index = this.state.todos.indexOf(e.target.value);
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
  toggleOvertime(index) {
    const selectedTodo = this.state.todos[index];
    selectedTodo.overtime = false;
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
        <TodoFilter status={this.state.filter} selectFilter={this.selectFilter} />
        <ul>
          {
            this.state.todos.map((item, index) => {
              const isTodoFiltered = (this.state.filter === 'todo' && item.finished === true);
              const isFinishedFiltered = (this.state.filter === 'finished' && item.finished === false);
              const isArchivedFiltered = (this.state.filter === 'archived' && item.archived === false);
              const isOvertimeFiltered = (this.state.filter === 'overtime' && item.overtime === false);
              if (isTodoFiltered || isFinishedFiltered || isArchivedFiltered || isOvertimeFiltered) {
                return null;
              }
              return (
                <div>
                  <TodoItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    deadline={item.deadline}
                    finished={item.finished}
                    archived={item.archived}
                    overtime={item.overtime}
                    onClick={this.toggleFinished.bind(this, index)}
                  />
                  <button onClick={this.deleteTodo}>Delete</button>
                  <button onClick={this.toggleArchived.bind(this, index)}>Archive</button>
                </div>
              );
            })
          }
        </ul>
        <TodoInput addTodo={this.addTodo} />
      </div>
    );
  }
}
