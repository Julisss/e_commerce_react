import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Topics from './pages/topics/Topics'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </div>
  );
}

export default App;
