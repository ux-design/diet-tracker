import React, { Component } from 'react'
import Logo from './logo'
import Icon from './icon'
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
  _onLoginClick = () => {
    this.props.fire('APP_MENU_CLICK')
    this.props.fire('ROUTE_CHANGE', '/login')
  }
  _onDashboardClick = () => {
    this.props.fire('APP_MENU_CLICK')
    this.props.fire('ROUTE_CHANGE', '/dashboard')
  }
  _onLogoutClick = () => {
    this.props.fire('APP_MENU_CLICK')
    this.props.fire('APP_LOGOUT')
  }
  _renderContent = (logged) => {
    if (logged) {
      return (
        <div className="header2__content">
          <div className="list list--thumbs flex flex-wrap">
            <div key="nav-item1" className="list__item list__item--thumb flex flex-center">
              <button onClick={this._onDashboardClick} className="btn btn--empty">
                <Icon name="tomato" type="nav"/>
              </button>
              <p className="list__item label text-center">dashboard</p>
            </div>
            <div key="nav-item2" className="list__item list__item--thumb flex flex-center">
              <button onClick={this._onLogoutClick} className="btn btn--empty">
                <Icon name="mushroom" type="nav"/>
              </button>
              <p className="list__item label text-center">logout</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="header2__content header2__content--notlogged flex flex-center flex-column">
          <div className="flex flex-center flex-column w-50">
            <button className="btn btn--white" onClick={this._onLoginClick}>
              login
            </button>
          </div>
        </div>
      )
    }
  }
  render() {
    const {fire, route, menu, logged} = this.props
    var menuStatus = ''
    if (menu) {
      menuStatus = 'header2--maximized'
    }
    return (
      <div className={`header2 ${menuStatus} flex flex-column`} style={{ backgroundImage: `url(${apiServer}/assets/app/nav-bar)` }}>
        {/* top navigation */}
        <div className="header2__top flex flex-row flex-center">
          <div className="header2__logo flex flex-center">
            <Logo /> 
          </div>
          <h1 className={`header2__title ${this.state.titleClasses} text-center`}>{navigationTitle[route]}</h1>
          <div className="header2__menu flex flex-center">
            <div className="menu menu__image" style={{ backgroundImage: `url(${apiServer}/assets/app/nav-btn)` }} onClick={()=>{fire('APP_MENU_CLICK')}} />
          </div>
        </div>
        {/* content when menu is open */}
        { this._renderContent(logged) }
      </div>
    )
  }
}

export default Navigation
