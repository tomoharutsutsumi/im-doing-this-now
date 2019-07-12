import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import AppRouter from './routers/AppRouter.jsx';
import { addTask } from './actions/tasks.jsx';
import './styles/styles.scss';

const store = configureStore();
// const n = moment(new Date(2018, 11, 11));
// store.dispatch(addTask({
//   requester: 'テスト', worker: 'テスト', deadlineDate: n, contents: 'ここをこうして、こうして、こうするとともに、これもこうする',
// }));

const Root = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
