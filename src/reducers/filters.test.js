import filters from './filters';

test('return initialState to be none by default', () => {
  expect(filters()).toBe('none');
});

test('SELECT_FILTER todo', () => {
  expect(filters('todo', { type: 'SELECT_FILTER', value: 'todo' })).toBe('todo');
});

test('SELECT_FILTER finished', () => {
  expect(filters('finished', { type: 'SELECT_FILTER', value: 'finished' })).toBe('finished');
});

test('SELECT_FILTER archived', () => {
  expect(filters('archived', { type: 'SELECT_FILTER', value: 'archived' })).toBe('archived');
});

test('SELECT_FILTER outoftime', () => {
  expect(filters('outoftime', { type: 'SELECT_FILTER', value: 'outoftime' })).toBe('outoftime');
});
