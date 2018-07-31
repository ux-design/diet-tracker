import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import Navigation from './components/navigation'
import Updater from './pages/updater'
import Login from './pages/login'
import PasswordForget from './pages/password-forget'
import AccountCreate from './pages/account-create'
import Dashboard from './pages/dashboard'
import Browser from './pages/browser'
import None from './pages/none'

// disable history back button
window.history.pushState(null, null, window.location.href)
window.onpopstate = function () {
    window.history.go(1)
}

class App extends Component {
  _renderPage() {
    switch(this.props.route) {
      case"/updater":
        return <Updater {...this.props} />
      case"/login":
        return <Login {...this.props} />
      case"/password-forget":
        return <PasswordForget {...this.props} />
      case"/account-create":
        return <AccountCreate {...this.props} />
      case"/dashboard":
        return <Dashboard {...this.props} />
      case"/browser-food":
        return <Browser type="food" data={this.props.food} {...this.props} />
      default:
        return <None />
    }
  }
  render() {
    return ([
        <Navigation {...this.props} />,
        this._renderPage()
    ])
  }
}

const mapState = state => {
  return { 
    route: state.router.get('address'),
    food: state.food.get('items').toJS(),
    menu: state.app.get('menu'),
    logged: state.user.get('logged'),
    serverAlive: state.app.get('serverAlive')
  }
}

const mapDispatch = (dispatch) => {
  return {
      fire: (type, payload) => {
          dispatch(actions(type, payload))
      }
  }
}
export default connect(mapState, mapDispatch)(App)
