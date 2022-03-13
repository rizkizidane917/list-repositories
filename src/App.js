import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
};
export default App;
