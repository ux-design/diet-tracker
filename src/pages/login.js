import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: 'mazzilli.andrea@gmail.com',
      password: '1234'
    }
  }
  _passwordForget = () => {
    this.props.fire('ROUTE_CHANGE','/password-forget')
  }
  _register = () => {
    this.props.fire('ROUTE_CHANGE','/register')
  }
  _login = () => {
    const payload = {email: this.state.email, password: this.state.password}
    this.props.fire('USER_LOGIN', payload)
  }
  _onChangeEmail = e => {
    this.setState({email: e.currentTarget.value})
  }
  _onChangePassword = e => {
    this.setState({password: e.currentTarget.value})
  }
  render() {
    return (
      <div className="fullscreen fullscreen--shownav flex flex-column flex-center">
        <div className="login">
          <input type="textfield" defaultValue={this.state.email} onChange={this._onChangeEmail} placeholder="email" />
          <input type="textfield" defaultValue={this.state.password} onChange={this._onChangePassword} placeholder="password" />
          <button className="btn btn--success" onClick={this._login}>login</button>
          <button className="btn btn--success" onClick={this._register}>register</button>
        </div>
      </div>
    )
  }
}

export default Login
