import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StringAnalyzer } from './Views/StringAnalyzer';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StringAnalyzer} />
      </Switch>
    </Router>
  );
};

export default App;
