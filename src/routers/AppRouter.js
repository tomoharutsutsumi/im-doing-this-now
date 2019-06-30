import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FinishedTaskPage from '../components/FinishedTaskPage';
import IndexTaskPage from '../components/IndexTaskPage';
import AddTaskPage from '../components/AddTaskPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={IndexTaskPage} exact={true}/>
        <Route path="/create" component={AddTaskPage}/>
        <Route path="/finished" component={FinishedTaskPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter