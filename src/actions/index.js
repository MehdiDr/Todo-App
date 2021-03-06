export const addTodo = (name, description, deadline) => ({
  type: 'ADD_TODO',
  id: Date.now(),
  name,
  description,
  deadline,
});
export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
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
