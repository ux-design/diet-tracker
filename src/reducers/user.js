import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  data: {},
  logged: false,
})

const userUpdate = (state, user) => {
  return state.set('data', Immutable.fromJS(user)).set('logged',true)
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"USER_UPDATE":
      return userUpdate(state, action.payload)
    default:
      return state
  }
}