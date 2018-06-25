import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  address: '/'
})

const routeChange = (state, address) => {
  return state.set('address', address)
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"ROUTE_CHANGE":
      return routeChange(state, action.payload)
    default:
      return state
  }
}