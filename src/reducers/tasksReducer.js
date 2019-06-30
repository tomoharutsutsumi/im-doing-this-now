const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state
      ];
    default: 
      return state;
  }
}