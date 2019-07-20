import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FinishedTaskPage from '../components/FinishedTaskPage';
import IndexTaskPage from '../components/IndexTaskPage';
import AddTaskPage from '../components/AddTaskPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={IndexTaskPage} exact />
        <Route path="/create" component={AddTaskPage} />
        <Route path="/finished" component={FinishedTaskPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
