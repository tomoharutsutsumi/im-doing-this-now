const defaultState = []; 

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
            ...action.isFinished
          }
        } else {
          return task;
        }
      })
    default: 
      return state;
  }
}