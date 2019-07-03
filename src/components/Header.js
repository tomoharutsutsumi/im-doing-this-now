import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>pages</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>home page</NavLink>
    <NavLink to="/create" activeClassName="is-active">add task</NavLink>
    <NavLink to="/done" activeClassName="is-active">done tasks</NavLink>
  </header>
)

export default Header