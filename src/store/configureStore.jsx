import { createStore, combineReducers } from 'redux';
import tasksReducer from '../reducers/tasksReducer';
import flashReducer from '../reducers/flashReducer';

export default () => {
  const store = createStore(
    combineReducers({
      tasks: tasksReducer,
      flash: flashReducer,
    }),
  );
  return store;
};
