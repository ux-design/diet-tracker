import React, { Component } from 'react'
import Icon from '../components/icon'

class Updater extends Component {
  render() {
    return (
      <div className="fullscreen flex flex-column flex-center">
        <div className="fullscreen__icon animation__spin--loop-slow">
          <Icon name="pepper_yellow" />
        </div>
        <div className="fullscreen__text">updating</div>
      </div>
    )
  }
}

export default Updater
