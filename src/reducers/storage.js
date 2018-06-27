import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  data: {}
})

const storageSet = (state, storage) => {
  return state.set('data', Immutable.fromJS(storage))
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"STORAGE_SET":
      return storageSet(state, action.payload)
    default:
      return state
  }
}