const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          key: action.id,
          text: action.text,
          finished: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.key === action.key) ? { ...todo, finished: !todo.finished } : todo
      );
    default:
      return state;
  }
};

export default todos;
