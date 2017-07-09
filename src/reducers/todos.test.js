import todos from '../reducers/todos';

test('return initialState to be [] by default', () => {
  expect(todos([])).toEqual([]);
});

test('return state after ADD_TODO action', () => {
  expect(todos([], {
    type: 'ADD_TODO',
    key: 'Add Todo',
    id: 'Add Todo',
    name: 'Add Todo',
    description: 'Add Todo',
    deadline: 'Add Todo',
    finished: false,
  }))
  .toEqual([{
    key: 'Add Todo',
    id: 'Add Todo',
    name: 'Add Todo',
    description: 'Add Todo',
    deadline: 'Add Todo',
    finished: false,
  }]);
});

test('return finished true after TOGGLE_TODO action', () => {
  expect(todos([{ finished: false }], { type: 'TOGGLE_TODO', index: 0 })).toEqual([{ finished: true }]);
});


test('return finished true after TOGGLE_TODO action', () => {
  expect(todos([{ finished: true }], { type: 'TOGGLE_TODO', index: 0 })).toEqual([{ finished: false }]);
});

test('return archived true after TOGGLE_ARCHIVED action', () => {
  expect(todos([{ archived: false }], { type: 'TOGGLE_ARCHIVED', index: 0 })).toEqual([{ archived: true }]);
});

test('return archived true after TOGGLE_ARCHIVED action', () => {
  expect(todos([{ archived: true }], { type: 'TOGGLE_ARCHIVED', index: 0 })).toEqual([{ archived: false }]);
});
