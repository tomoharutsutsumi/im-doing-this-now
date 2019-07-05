const defaultState = []; 
// なぜこれは配列なのか=> stateのなかでひとかたまりであるitemを複数管理するため、その構造上

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.payload
      ]
    case 'FINISH_TASK':
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.is_finished
          }
        } else {
          return task;
        }
      })
    default: 
      return state;
  }
}