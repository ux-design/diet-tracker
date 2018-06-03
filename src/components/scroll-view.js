import React, { Component } from 'react'
import Icon from './icon'

class ScrollView extends Component {
  _renderItems() {
    switch(this.props.type){
      case"food":
        var result = []
        const data = this.props.data
        for( let x in data ) {
          result.push(
            <div key={x} className="list__item list__item--thumb flex flex-center">
              <Icon name={x}/>
              <p>{x}</p>
            </div>
          )
        }
        return (
          <div className="list list--thumbs flex flex-wrap">
            { result }
          </div>
        )
      default:
        return null
    }
  }
  render() {
    return (
      <div className="content content--scrollable">
        { this._renderItems() }
      </div>
    )
  }
}

export default ScrollView
