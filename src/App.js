import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import './App.css'
import Logo from './components/logo'
import Icon from './components/icon'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header2 flex flex-row flex-center">
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
              <Icon name="lettuce"/>
              <p>lettuce</p>
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
              <Icon name="lettuce"/>
              <p>lettuce</p>
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
              <Icon name="lettuce"/>
              <p>lettuce</p>
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
              <Icon name="lettuce"/>
              <p>lettuce</p>
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

const mapState = state => {
  return state
}

const mapDispatch = (dispatch) => {
  return {
      fire: (action, payload) => {
          dispatch(actions(action, payload))
      }
  }
}
export default connect(mapState, mapDispatch)(App)
