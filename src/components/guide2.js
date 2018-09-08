import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import Lottie from './lottie'

class Guide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: true
    }
  }
  _render() {
    /* setTimeout( () => {
      this.setState({ isReady: true })
    }, 10 ) */
  }
  _onClick = () => {
    this.props.fire('GUIDE_ANIMATE', this.props.guide.onClick)
    setTimeout(()=>{
      this.props.fire('GUIDE_ANIMATE', 'say-hi')
    }, 2000)
  }
  componentDidMount() {
    //this._render()
  }
  componentWillReceiveProps() {
    /* this.setState({ isReady: false })
    setTimeout( () => {
      this.setState({ isReady: true })
    }, 10 ) */
  }
  render() {
    var { style } = this.props
    if ( !style ) { 
      style = { width: '100px', height: '100px', border: '1px dashed red', backgroundColor: 'yellow' }
    }
    return (
      <Fragment>
        <div style={style} onClick={this._onClick}>
          {
            this.state.isReady
              ? <Lottie
                  animation={this.props.guide.animation}
                  style={style}
                  loop={this.props.guide.loop}
                  autoplay={true} 
                />
              : null
          }
        </div>
      </Fragment>
    )
  }
}

const mapState = state => {
  return { 
    guide: state.guide.toJS()
  }
}
const mapDispatch = (dispatch) => {
  return {
      fire: (type, payload) => {
          dispatch(actions(type, payload))
      }
  }
}
export default connect(mapState, mapDispatch)(Guide)