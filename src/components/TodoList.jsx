import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div className="section">
      <ul>
        {
          props.todos
            .filter(item => (props.filters.todo === 'TODO' ? !item.finished : true))
            .filter(item => (props.filters.todo === 'FINISHED' ? item.finished : true))
            .filter(item => (props.filters.archived === 'ARCHIVED' ? item.archived : true))
            .filter(item => (props.filters.outoftime === 'OUTOFTIME' ? (item.deadline && item.deadline < Date.now()) : true))
            .map((item, index) => (
              <div className="box content is-">
                <TodoItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  deadline={item.deadline}
                  finished={item.finished}
                  archived={item.archived}
                  onClick={props.toggleFinished.bind(this, index)}
                />
                <button className="delete is-medium" onClick={props.deleteTodo.bind(this, index)} />
              <button className="button is-warning" onClick={props.toggleArchived.bind(this, index)}>Archive</button>
              </div>
            ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
