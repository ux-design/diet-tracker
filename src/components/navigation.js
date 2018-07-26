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
    setTimeout(() => {
      this.setState({
        titleClasses: 'animation__bounce'
      })
    },200)
    setTimeout(() => {
      this.setState({
        titleClasses: ''
      })
    },1000)
  }
  componentWillReceiveProps() {
    //this._animateTitle() 
  }
  render() {
    const {fire, route, menu} = this.props
    var menuStatus = ''
    if (menu) {
      menuStatus = 'header2--maximized'
    }
    return (
      <div className={`header2 ${menuStatus} flex flex-column`} style={{ backgroundImage: `url(${apiServer}/assets/app/nav-bar)` }}>
        {/* top navigation */}
        <div className="header2__top flex flex-row flex-center">
          <div className="header2__logo flex flex-center">
            <Logo fire={fire}/> 
          </div>
          <h1 className={`header2__title ${this.state.titleClasses}`}>{navigationTitle[route]}</h1>
          <div className="header2__menu flex flex-center">
            <div className="menu menu__image" style={{ backgroundImage: `url(${apiServer}/assets/app/nav-btn)` }} onClick={()=>{fire('APP_MENU_CLICK')}} />
          </div>
        </div>
        {/* content when menu is open */}
        <div className="header2__content">
          
        </div>
      </div>
    )
  }
}

export default Navigation
