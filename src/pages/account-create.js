import React, { Component } from 'react'

class AccountCreate extends Component {
  constructor() {
    super()
    this.state = {
      email: 'email@email.com',
      password: '12341234',
      passwordRepeat: '12341234',
      accepted: true
    }
  }
  _emailIsValid = (email) => {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }
  _passwordIsValid = (password) => {
    if (password.length > 6 ) {
      return true
    } else {
      return false
    }
  }
  _passwordIsRepeatedCorrectly = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
      return true
    } else {
      return false
    }
  }
  _register = () => {
    const { email, password, passwordRepeat, accepted } = this.state
    var error
    if ( !this._emailIsValid(email) ) {
      error = 'check your email'
    }
    if ( !this._passwordIsValid(password) ) {
      error = 'check your password'
    }
    if ( !this._passwordIsRepeatedCorrectly(password, passwordRepeat) ) {
      error = 'repeated password wrong'
    }
    if ( !this.state.accepted ) {
      error = 'you need to accept the terms'
    }
    if (!error) {
      this.props.fire('USER_REGISTER', this.state)
    } else {
      console.log(error)
    }    
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
  _onChangeAccept = e => {
    this.setState({accepted: !this.state.accepted})
  }
  render() {
    var checked = ''
    if (this.state.accepted) {
      checked = 'checked'
    }
    return (
      <div className="content content--scrollable flex flex-column flex-center">
        <div className="registration flex flex-column flex-center">
          <div className="registration__form">
            <input type="textfield" defaultValue={this.state.email} onChange={this._onChangeEmail} placeholder="type your email" />
            <input type="password" defaultValue={this.state.password} onChange={this._onChangePassword} placeholder="type your password" />
            <input type="password" defaultValue={this.state.passwordRepeat} onChange={this._onChangePasswordRepeat} placeholder="type your password again" />
            <div className="registration__accept">
              <div className="registration__accept-checkbox flex flex-center">
                <input type="checkbox" onChange={this._onChangeAccept} checked={checked} />
              </div>
              <div className="registration__accept-text flex flex-column flex-start">
                <p className="text-left">
                  I ACCEPT THE TERMS OF THE REGISTRATION<br/>
                  <a>read more</a>
                </p>
              </div>
            </div>
            <button className="btn btn--primary" onClick={this._register}>create account</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountCreate
