import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';

export default function App(): ReactElement {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about" component={AboutUs} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
}
