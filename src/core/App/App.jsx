import React, { useEffect } from 'react';
import './App.scss';
import { NavLink, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { ContactsPage } from '../../pages/ContactsPage/ContactsPage';
import { AboutUsPage } from '../../pages/AboutUsPage/AboutUsPage';
import { getData } from '../../api/someApi/provider';

const App = () => {
  useEffect(() => {
    getData('Five', 'title')
      .then((films) => console.log(films));
  });

  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
          <li><NavLink to="/contacts" activeClassName="selected">contacts</NavLink></li>
          <li><NavLink to="/about-us" activeClassName="selected">about us</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/contacts"><ContactsPage /></Route>
        <Route path="/about-us"><AboutUsPage /></Route>
        <Route path="*"><AboutUsPage /></Route>
      </Switch>
    </div>
  );
};

export default App;
