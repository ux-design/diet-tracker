import React, { Component, Fragment } from 'react'
import vegetables from './vegetables'
import Lottie from './lottie'
import * as pop from '../lottie/pop.json'

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopVisible: false,
      isIconVisible: false
    }
    this.lottieRef = React.createRef()
  }
  componentDidMount() {
    let delay = this.props.delay
    if (!delay) {delay = 0}
    if (pop) {
      setTimeout( () => {
        this.setState({ isPopVisible: true })
      }, delay )
      setTimeout( () => {
        this.setState({ isIconVisible: true })
      }, delay + 300 )
    } else {
      setTimeout( () => {
        this.setState({ isIconVisible: true })
      }, delay + 300 )
    }
    
  }
  render() {
    var iconResource = vegetables.carrot
    if (vegetables[this.props.name]) {
      iconResource = vegetables[this.props.name]
    }
    return (
      <Fragment>
        <div className={`icon flex flex-center ${this.props.className ? this.props.className : ''}`}>
          {
            this.state.isIconVisible
              ? <img src={iconResource} className="icon__image" alt={this.props.name} />
              : <div className="icon__image" />
          }
        </div>
        {
          this.state.isPopVisible
            ? <Lottie
                animation={pop}
                style={{position: 'absolute', width: '100px', height: '100px'}}
              />
            : null
        }
        <Lottie />
      </Fragment>
    )
  }
}

export default Icon
