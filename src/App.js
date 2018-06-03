import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import './App.css'
import Logo from './components/logo'
import Dashboard from './pages/dashboard'
import Browser from './pages/browser'

class App extends Component {
  _renderPage() {
    switch(this.props.route) {
      case"dashboard":
        return <Dashboard />
      case"browser-food":
        return <Browser type="food" data={this.props.food} />
      default:
        return null
    }
  }
  render() {
    return (
      <div className="app">
        <div className="header2 flex flex-row flex-center">
          <Logo />
          <h1 className="header__title">Diet Tracker</h1>
        </div>
        { this._renderPage() }
      </div>
    )
  }
}

const mapState = state => {
  return { 
    route: state.app.get('route'),
    food: state.food.get('items').toJS()
  }
}

const mapDispatch = (dispatch) => {
  return {
      fire: (action, payload) => {
          dispatch(actions(action, payload))
      }
  }
}
export default connect(mapState, mapDispatch)(App)
