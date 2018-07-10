import React, { Component } from 'react'
import Logo from './logo'
import {apiServer, navigationTitle} from '../config'

class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      titleClasses: 'animation__bounce'
    }
  }
  _animateTitle() {
    this.setState({
      titleClasses: 'animation__bounce'
    })
    setTimeout(() => {
      this.setState({
        titleClasses: ''
      })
    },1000)
  }
  componentWillReceiveProps() {
    this._animateTitle()
  }
  render() {
    const {fire, route} = this.props
    return (
      <div 
        className="header2 flex flex-row flex-center"
        style={{ backgroundImage: `url(${apiServer}/assets/app/nav-bg)` }}>
        <div className="header2__logo flex flex-center">
          <Logo fire={fire}/> 
        </div>
        <h1 className={`header2__title ${this.state.titleClasses}`}>{navigationTitle[route]}</h1>
        <div className="header2__menu flex flex-center">
          <p>M</p>
        </div>
      </div>
    )
  }
}

export default Navigation
