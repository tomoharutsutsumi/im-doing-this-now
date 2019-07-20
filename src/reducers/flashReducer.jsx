const flashReducerDefaultState = {
  display: false,
  text: '',
};

export default (state = flashReducerDefaultState, action) => {
  switch (action.type) {
    case 'DISPLAY':
      return {
        ...state,
        ...action.payload,
      };
    case 'DELETE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
