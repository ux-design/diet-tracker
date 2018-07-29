import React, { Component } from 'react'
import Icon from './icon'

class ScrollView extends Component {
  _renderItems() {
    switch(this.props.type){
      case"food":
        var result = []
        const data = this.props.data
        let n = 0
        for( let x in data ) {
          ++n
          result.push(
            <div key={x} className="list__item list__item--thumb flex flex-center">
              <Icon name={x} bounce delay={n*100}/>
              <p className="list__item label text-center">{x.replace('_', ' ')}</p>
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
