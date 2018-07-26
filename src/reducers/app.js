import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  ready: false,
  menu: false,
})

const appInitSuccess = (state) => {
  return state.set('ready', true)
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
    default:
      return state
  }
}