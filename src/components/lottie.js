import React, { Component } from 'react'
import LottieWeb from 'lottie-web'

class Lottie extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.lottieRef = React.createRef()
  }
  componentDidMount () {
    if (this.props.animation) {
      LottieWeb.loadAnimation({
        container: this.lottieRef.current,
        renderer: 'svg',
        loop: this.props.loop,
        autoplay: this.props.autoplay,
        animationData: require(`../lottie/guide/${this.props.animation}.json`)
      })
    }
  }
  componentWillReceiveProps (nextProps) {
    LottieWeb.destroy()
    if (nextProps.animation) {
      LottieWeb.loadAnimation({
        container: this.lottieRef.current,
        renderer: 'svg',
        loop: nextProps.loop,
        autoplay: nextProps.autoplay,
        animationData: require(`../lottie/guide/${nextProps.animation}.json`)
      })
    }
  }
  render () {
    return (
      <div ref={this.lottieRef}
        style={this.props.style} />
    )
  }
}

export default Lottie
