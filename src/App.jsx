import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
