import React, { Component } from 'react'
import logo from '../svg/logo.svg'
class Logo extends Component {
  render() {
    return (
      <div className="logo logo--spin flex flex-center">
        <img src={logo} className="logo__image" alt="logo" />
      </div>
    )
  }
}

export default Logo
