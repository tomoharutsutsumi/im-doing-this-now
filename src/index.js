import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import AppRouter from './routers/AppRouter.jsx';
import { addTask } from './actions/tasks.jsx';
import './styles/styles.scss';

const store = configureStore();
// store.dispatch(addTask({
//   requester: 'テスト', worker: 'テスト', startDate: 3, contents: 'ここをこうして、こうして、こうするとともに、これもこうする',
// }));
// store.dispatch(addTask({
//   requester: 'テスト', worker: 'テスト', startDate: 5, contents: 'ここをこうして、こうして、こうするとともに、これもこうする',
// }));
// store.dispatch(addTask({
//   requester: 'テスト', worker: 'テスト', startDate: 30, contents: 'ここをこうして、こうして、こうするとともに、これもこうする',
// }));
// store.dispatch(addTask({
//   requester: 'テスト', worker: 'テスト', startDate: 1, contents: 'ここをこうして、こうして、こうするとともに、これもこうする',
// }));
// store.dispatch(addTask({
//   requester: 'テスト', worker: 'テスト', startDate: 100, contents: 'ここをこうして、こうして、こうするとともに、これもこうする',
// }));
// store.dispatch(addTask({
//   requester: 'テスト', worker: 'テスト', startDate: 2, contents: 'ここをこうして、こうして、こうするとともに、これもこうする',
// }));

const Root = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
