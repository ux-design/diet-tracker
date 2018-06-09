import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  ready: false,
  route: null
})

const appRoute = (state, payload) => {
  return state.set("route", payload)
}
export default ( state = initialState, action ) => {
  switch(action.type){
    case"APP_ROUTE":
      return appRoute(state, action.payload)
    default:
      return state
  }
}