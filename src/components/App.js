import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CreateLink from './CreateLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Instant</h2>
        </div>
          <CreateLink />
      </div>
    );
  }
}

export default App;
