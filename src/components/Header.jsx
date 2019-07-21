import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="header__title">I'm doing this now!</h1>
    <div className="header__links">
      <NavLink to="/" className="header__link" activeClassName="is-active" exact>tasks being done</NavLink>
      <NavLink to="/create" className="header__link" activeClassName="is-active">add task</NavLink>
      <NavLink to="/finished" className="header__link" activeClassName="is-active">finished tasks</NavLink>
    </div>
  </header>
);

export default Header;
