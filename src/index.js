import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addTask } from './actions/tasks';

const store = configureStore()
store.dispatch(addTask({requester: 'aくん', worker: 'Bくん', start_date: '20190201', deadline_date: '20190222', contents: 'make index funnctions'}))
store.dispatch(addTask({requester: 'aくん', worker: 'Bくん', start_date: '20190201', deadline_date: '20190222', contents: 'make index funnctions'}))
const Root = (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
)  

ReactDOM.render(Root , document.getElementById('root'));