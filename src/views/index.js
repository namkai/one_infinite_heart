import React, { PureComponent } from 'react';
import Navbar from '../components/Navbar';
import Home from '../views/Home'
import { Switch, Route } from 'react-router-dom'
import './index.css';

class App extends PureComponent {
  render() {
    return (
      <div className="main-container">
        <Navbar/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
