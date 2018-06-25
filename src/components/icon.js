import React, { Component, Fragment } from 'react'
import Lottie from './lottie'
import * as pop from '../lottie/pop.json'
import {apiServer} from '../config'

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopVisible: false,
      isIconVisible: false,
    }
    this.lottieRef = React.createRef()
  }

  _render() {
    let delay = this.props.delay
    if (!delay) {delay = 0}
    if (this.props.pop) {
      setTimeout( () => {
        this.setState({ isPopVisible: true })
      }, delay )
      setTimeout( () => {
        this.setState({ isIconVisible: true })
      }, delay + 300 )
    } else {
      setTimeout( () => {
        this.setState({ isIconVisible: true })
      }, delay )
    }
  }
  componentDidMount() {
    this._render()
  }
  render() {
    return (
      <Fragment>
        <div className={`icon flex flex-center ${this.props.className ? this.props.className : ''}`}>
          {
            this.state.isIconVisible
              ? <img src={`${apiServer}/assets/food/${this.props.name}`} className="icon__image animation__bounce" alt={this.props.name} />
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
