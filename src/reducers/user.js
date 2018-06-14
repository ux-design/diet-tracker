import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  data: {}
})

export default ( state = initialState, action ) => {
  switch(action.type){
    default:
      return state
  }
}