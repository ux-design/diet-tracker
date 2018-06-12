import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import Logo from './components/logo'
import Updater from './pages/updater'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Browser from './pages/browser'
import None from './pages/none'

class App extends Component {
  _renderPage() {
    switch(this.props.route) {
      case"updater":
        return <Updater {...this.props} />
      case"login":
        return <Login {...this.props} />
      case"dashboard":
        return <Dashboard {...this.props} />
      case"browser-food":
        return <Browser type="food" data={this.props.food} {...this.props} />
      default:
        return <None />
    }
  }
  render() {
    return (
      <div className="app">
        <div className="header2 flex flex-row flex-center">
          <Logo />
          <h1 className="header__title">{this.props.route}</h1>
        </div>
        { this._renderPage() }
      </div>
    )
  }
}

const mapState = state => {
  return { 
    route: state.router.get('address'),
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
