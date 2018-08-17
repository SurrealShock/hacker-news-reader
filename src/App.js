import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import NewList from './components/NewList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/:page" component={PostList} />
            <Route exact path="/new/:page" component={NewList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
