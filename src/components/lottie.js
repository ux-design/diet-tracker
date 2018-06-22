import React, { Component } from 'react'
import LottieWeb from 'lottie-web'

class Lottie extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.lottieRef = React.createRef()
  }
  componentDidMount () {
    LottieWeb.loadAnimation({
      container: this.lottieRef.current,
      renderer: 'svg',
      loop: this.props.loop,
      autoplay: true,
      animationData: this.props.animation
    })
  }
  render () {
    return (
      <div ref={this.lottieRef}
        style={this.props.style} />
    )
  }
}

export default Lottie
