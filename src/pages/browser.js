import React, { Component } from 'react'
import ScrollView from '../components/scroll-view'

class Browser extends Component {
  render() {
    return (
      <ScrollView type={this.props.type} data={this.props.data} />
    )
  }
}

export default Browser
