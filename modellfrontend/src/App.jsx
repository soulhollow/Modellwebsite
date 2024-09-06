import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import ModelList from './ModelList';
import ChatRoom from './ChatRoom';
import Impressum from './Impressum';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/models" component={ModelList} />
        <Route path="/chat" component={ChatRoom} />
        <Route path="/impressum" component={Impressum} />
      </Switch>
    </Router>
  );
};

export default App;
