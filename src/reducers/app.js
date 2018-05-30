import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  ready: false,
  route: null
})

export default ( state = initialState, action ) => {
  switch(action.type){
    default:
      return state
  }
}