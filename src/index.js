import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import AppRouter from './routers/AppRouter.jsx';
import { addTask } from './actions/tasks.jsx';

const store = configureStore();
store.dispatch(addTask({ requester: 'テスト', worker: 'テスト', startDate: 1221 }));

const Root = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
