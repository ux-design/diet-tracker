import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  email: 'mazzilli.andrea@gmail.com',
  password: '1234'
})

export default ( state = initialState, action ) => {
  switch(action.type){
    default:
      return state
  }
}