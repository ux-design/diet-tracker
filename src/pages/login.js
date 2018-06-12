import React, { Component } from 'react'

class Login extends Component {
  _passwordForget = () => {
    return this.props.fire('ROUTE_CHANGE','password-forget')
  }
  _register = () => {
    return this.props.fire('ROUTE_CHANGE','register')
  }
  render() {
    return (
      <div className="fullscreen fullscreen--shownav flex flex-column flex-center">
        <div className="login">
          <p>email</p>
          <input type="textfield" placeholder="email" />
          <p>password</p>
          <input type="textfield" placeholder="password" />
          <button onClick={this._passwordForget}>forget password</button>
          <button onClick={this._register}>register</button>
        </div>
      </div>
    )
  }
}

export default Login
