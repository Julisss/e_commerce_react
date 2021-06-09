import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Topics from './pages/topics/Topics';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/topics" component={Topics} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
