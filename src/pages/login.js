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
    this.props.fire('ROUTE_CHANGE','/account-create')
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
      <div className="content content--scrollable flex flex-column flex-center">
        <div className="login flex flex-column flex-center">
          <div className="login__form">
            {/* email input */}
            <input type="textfield" defaultValue={this.state.email} onChange={this._onChangeEmail} placeholder="type your email" />
            {/* password input */}
            <input type="password" defaultValue={this.state.password} onChange={this._onChangePassword} placeholder="type your password" />
            {/* login button */}
            <button className="btn btn--primary" onClick={this._login}>
              login
            </button>
            {/* password retrieve link */}
            <p className="text-center">
              <a className="login__remember" onClick={this._passwordForget}>
                i don't remember my password
              </a>
            </p>
            {/* registration label */}
            <p className="text-center">if you are not registered yet:</p>
            {/* registration button */}
            <button className="btn btn--primary" onClick={this._register}>
              create account
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
