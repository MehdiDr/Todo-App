let nextTodoId = 0;
export const addTodo = (name, description, deadline) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name,
  description,
  deadline,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const toggleArchived = id => ({
  type: 'TOGGLE_ARCHIVED',
  id,
});

export const selectFilter = buttonClicked => ({
  type: 'SELECT_FILTER',
  buttonClicked,
});
