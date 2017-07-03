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
  addTodo = (value) => {
    const todos = this.state.todos;
    todos.push({
      label: value
    });
    this.setState({
      todos,
      inputValue: '',
    });
  }
  deleteTodo = (e) => {
    const todos = this.state.todos;
    const index = this.state.todos.indexOf(e.target.value)
    this.state.todos.splice(index, 1)
    this.setState({
      todos,
    })
  }
  toggleFinished = (index) => {
    const selectedTodo = this.state.todos[index];
    selectedTodo.finished =!selectedTodo.finished;
    console.log(selectedTodo)
    this.setState({
      todos: this.state.todos
    })
  }
  selectFilter = (status) => {
    this.setState({
      filter: status,
    })
  }
  render() {
    return (
      <div>
        <TodoInput addTodo={this.addTodo}/>
        <ul>
          {
            this.state.todos.map((item, index) => {
              const isTodoFiltered = (this.state.filter ==="todo" && item.finished === true)
              console.log(isTodoFiltered)
              const isFinishedFiltered = (this.state.filter === "finished" && item.finished === false)
              if (isTodoFiltered || isFinishedFiltered) return null
              return (
                <div>
                  <TodoItem key={index}
                            finished={item.finished}
                            label= {item.label}
                            onClick={this.toggleFinished.bind(this,index)}
                          />
                  <button onClick={this.deleteTodo}>Delete</button>
                </div>
              );
            })
          }
        </ul>
        <TodoFilter status={this.state.filter} selectFilter={this.selectFilter}/>
      </div>
    )
  }
}
