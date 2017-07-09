const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          key: action.id,
          id: action.id,
          name: action.name,
          description: action.description,
          deadline: action.deadline,
          finished: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => (
        (todo.id === action.id) ? { ...todo, finished: !todo.finished } : todo
      ));
    case 'TOGGLE_ARCHIVED':
      return state.map(todo => (
        (todo.id === action.id) ? { ...todo, archived: !todo.archived } : todo
      ));
    default:
      return state;
  }
};

export default todos;
