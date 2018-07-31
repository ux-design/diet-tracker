import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  ready: false,
  menu: false,
  serverAlive: true 
})

const appInitSuccess = (state) => {
  return state.set('ready', true)
}
const appServerDown = (state) => {
  return state.set('serverAlive', false)
}
const appServerAlive = (state) => {
  return state.set('serverAlive', true)
}
const appMenuClick = (state) => {
  return state.set('menu', !state.get('menu'))
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"APP_INIT_SUCCESS":
      return appInitSuccess(state)
    case"APP_MENU_CLICK":
      return appMenuClick(state)
    case"SERVER_DOWN":
      return appServerDown(state)
    case"SERVER_ALIVE":
      return appServerAlive(state)
    default:
      return state
  }
}