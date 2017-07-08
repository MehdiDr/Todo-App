const todos = (state = [
  {
    id: 42,
    name: 'foo',
    description: 'bar',
    deadline: new Date('2018'),
    finished: false,
    archived: false,
  },
], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo => (
        (todo.id === action.id) ? { ...todo, finished: !todo.finished } : todo
      ));
    default:
      return state;
  }
};

export default todos;
