import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  body: 'tomato',
  animation: 'say-hi',
  loop: 2,
  onClick: 'dull'
})

const guideBody = (state, name) => {
  return state.set('body', name)
}

const guideAnimate = (state, animation) => {
  return state.set('animation', animation)
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"GUIDE_BODY":
      return guideBody(state, action.payload)
    case"GUIDE_ANIMATE":
      return guideAnimate(state, action.payload)
    default:
      return state
  }
}