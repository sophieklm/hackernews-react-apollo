import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div className='center w85'>
      <div className='ph3 pv1 background-gray'>
        <LinkList />
        <CreateLink/>
      </div>
    </div>
    );
  }
}

export default App;
