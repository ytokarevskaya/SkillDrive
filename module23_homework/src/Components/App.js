import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './About-page/About';
import Questions from './Questions-page/Questions';
import NotFound from './Global/Page404'
import Home from './Home-page/Home'

const App = () => {
  return (
      <Switch>
        <Route path="/questions" component={Questions} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
  );
}

export default App;