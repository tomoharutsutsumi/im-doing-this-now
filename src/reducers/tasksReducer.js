const defaultState = []; 
// なぜこれは配列なのか=> stateのなかでひとかたまりであるitemを複数管理するため、その構造上

export default (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.payload
      ]
    default: 
      return state;
  }
}