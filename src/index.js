import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

const store = configureStore()

const Root = (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
)  

ReactDOM.render(Root , document.getElementById('root'));