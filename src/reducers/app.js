import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  ready: false,
})

const appInitSuccess = (state) => {
  return state.set('ready', true)
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"APP_INIT_SUCCESS":
      return appInitSuccess(state)
    default:
      return state
  }
}