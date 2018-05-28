import React, { Component } from 'react'
import vegetables from './vegetables'
class Icon extends Component {
  render() {
    var iconResource = vegetables.carrot
    if (vegetables[this.props.name]) {
      iconResource = vegetables[this.props.name]
    }
    return (
      <div className={`icon flex flex-center ${this.props.className ? this.props.className : ''}`}>
        <img src={iconResource} className="icon__image" alt={this.props.name} />
      </div>
    )
  }
}

export default Icon
