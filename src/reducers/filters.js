const filters = (state = {
  todo: '',
  outoftime: '',
  archived: '',
}, action) => {
  switch (action.type) {
    case 'SELECT_FILTER':
      if (action.buttonClicked === 'To do') {
        return (state.todo === 'TODO') ? { ...state, todo: '' } : { ...state, todo: 'TODO' };
      }
      if (action.buttonClicked === 'Finished') {
        return (state.todo === 'FINISHED') ? { ...state, todo: '' } : { ...state, todo: 'FINISHED' };
      }
      if (action.buttonClicked === 'Archived') {
        return (state.archived === 'ARCHIVED') ? { ...state, archived: '' } : { ...state, archived: 'ARCHIVED' };
      }
      if (action.buttonClicked === 'Out of time') {
        return (state.outoftime === 'OUTOFTIME') ? { ...state, outoftime: '' } : { ...state, outoftime: 'OUTOFTIME' };
      }
      return state;
    default:
      return state;
  }
};

export default filters;
