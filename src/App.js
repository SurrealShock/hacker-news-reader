import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostPage from './components/pages/PostPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/page/:page" component={PostPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
