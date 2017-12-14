import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './views/Home'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
