import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  ready: false,
  route: 'browser-food'
})

export default ( state = initialState, action ) => {
  switch(action.type){
    default:
      return state
  }
}