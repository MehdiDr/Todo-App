import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {label: "Success the todo app", finished: false},
        {label: "Whatever", finished: false},
      ],
      inputValue: '',
    };
  }
  addTodo = () => {
    const todos = this.state.todos;
    todos.push({
      label: this.state.inputValue
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
      inputValue:'',
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
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.todos.map((item, index) => {
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
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button onClick={this.addTodo}>Add</button>
        </div>
      </div>
    )
  }
}
