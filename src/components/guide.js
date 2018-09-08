import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import Lottie from './lottie'

class Guide extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  _onClick = () => {
    this.props.fire('GUIDE_ANIMATE', this.props.guide.onClick)
    setTimeout(()=>{
      this.props.fire('GUIDE_ANIMATE', 'say-hi')
    }, 2000)
  }
  render() {
    var { style } = this.props
    if ( !style ) { 
      style = { width: '100px', height: '100px', border: '1px dashed red', backgroundColor: 'yellow' }
    }
    console.log('render')
    return (
      <Fragment>
        <div style={style} onClick={this._onClick}>
          <Lottie
            animation={this.props.guide.animation}
            style={style}
            loop={this.props.guide.loop}
            autoplay={true} 
          />
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