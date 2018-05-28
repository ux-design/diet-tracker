import React, { Component } from 'react'
import './App.css'
import Logo from './components/logo'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header2 flex flex-column flex-center">
          <Logo />
          <h1 className="header__title">Welcome to React</h1>
        </div>
        <p className="description">
          If you want to get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
