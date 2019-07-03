import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addTask } from './actions/tasks';

const store = configureStore()
console.log(store.getState())
const Root = (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
)  

ReactDOM.render(Root , document.getElementById('root'));