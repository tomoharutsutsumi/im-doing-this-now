import { createStore } from 'redux';
import tasksReducer from '../reducers/tasksReducer';

export default () => {
  const store = createStore(tasksReducer);
  return store;
};
