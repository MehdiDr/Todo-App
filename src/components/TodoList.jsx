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
  addTodo = (value1, value2, value3) => {
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
        <TodoFilter status={this.state.filter} selectFilter={this.selectFilter}/>
        <ul>
          {
            this.state.todos.map((item, index) => {
              const isTodoFiltered = (this.state.filter ==="todo" && item.finished === true)
              const isFinishedFiltered = (this.state.filter === "finished" && item.finished === false)
              if (isTodoFiltered || isFinishedFiltered) return null
              return (
                <div>
                  <TodoItem key={index}
                            finished={item.finished}
                            name= {item.name}
                            description= {item.description}
                            deadline={item.deadline}
                            onClick={this.toggleFinished.bind(this,index)}
                          />
                  <button onClick={this.deleteTodo}>Delete</button>
                </div>
              );
            })
          }
        </ul>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    )
  }
}
