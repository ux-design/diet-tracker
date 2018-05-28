import React, { Component } from 'react'
import './App.css'
import Logo from './components/logo'
import Icon from './components/icon'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header2 flex flex-column flex-center">
          <Logo />
          <h1 className="header__title">Diet Tracker</h1>
        </div>
        <div className="content content--scrollable">
          <div className="list list--thumbs flex flex-wrap">
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="onion"/>
              <p>onion</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="tomato"/>
              <p>tomato</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="carrot"/>
              <p>carrot</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="lattuce"/>
              <p>lattuce</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="potato"/>
              <p>potato</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="onion"/>
              <p>onion</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="tomato"/>
              <p>tomato</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="carrot"/>
              <p>carrot</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="lattuce"/>
              <p>lattuce</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="potato"/>
              <p>potato</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="onion"/>
              <p>onion</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="tomato"/>
              <p>tomato</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="carrot"/>
              <p>carrot</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="lattuce"/>
              <p>lattuce</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="potato"/>
              <p>potato</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="onion"/>
              <p>onion</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="tomato"/>
              <p>tomato</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="carrot"/>
              <p>carrot</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="lattuce"/>
              <p>lattuce</p>
            </div>
            <div className="list__item list__item--thumb flex flex-center">
              <Icon name="potato"/>
              <p>potato</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
