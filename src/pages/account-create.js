import React, { Component } from 'react'

class AccountCreate extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      passwordRepeat: '',
      accept: false
    }
  }
  _register = () => {
    this.props.fire('ROUTE_CHANGE','/register')
  }
  _onChangeEmail = e => {
    this.setState({email: e.currentTarget.value})
  }
  _onChangePassword = e => {
    this.setState({password: e.currentTarget.value})
  }
  _onChangePasswordRepeat = e => {
    this.setState({passwordRepeat: e.currentTarget.value})
  }
  render() {
    return (
      <div className="fullscreen fullscreen--shownav flex flex-column flex-center">
        <div className="login flex flex-column flex-center">
          <div className="login__form">
            <input type="textfield" defaultValue={this.state.email} onChange={this._onChangeEmail} placeholder="type your email" />
            <input type="password" defaultValue={this.state.password} onChange={this._onChangePassword} placeholder="type your password" />
            <input type="password" defaultValue={this.state.passwordRepeat} onChange={this._onChangePasswordRepeat} placeholder="type your password again" />
            <p>I ACCEPT THE TERMS OF THE REGISTRATION</p>
            <a>read more</a>
            <button className="btn btn--primary" onClick={this._register}>create account</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountCreate
