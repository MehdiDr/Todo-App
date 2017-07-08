export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const toggleArchived = id => ({
  type: 'TOGGLE_ARCHIVED',
  id,
});
