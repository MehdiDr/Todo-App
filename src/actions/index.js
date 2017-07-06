let nextTodoKey = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO'
    key: nextTodoKey++
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const ToggleTodo = key => {
  return {
    type: 'TOGGLE_TODO',
    key
  }
}
