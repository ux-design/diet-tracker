import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  address: '/updater'
})

const routeChange = (state, address) => {
  if (address !== '/updater') {
    window.history.pushState("object or string", "Title", address)
  }
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