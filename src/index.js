import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addTask } from './actions/tasks';

const store = configureStore();
store.dispatch(addTask({ requester: 'テスト', worker: 'テスト', start_date: 1221 }));

const Root = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
