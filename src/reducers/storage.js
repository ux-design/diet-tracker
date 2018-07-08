import Immutable from 'immutable'

const initialState = Immutable.fromJS({})

const reduxStorageUpdate = (storage) => {
  var tempState = {}
  if (!storage.key){
    var result = {}
    for (let x in storage) {
      result[x] = JSON.parse(storage[x])
    }
    return Immutable.fromJS(result)
  } else {
    const {key, value} = storage
    tempState[key] = value
    return Immutable.fromJS(tempState)
  }
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"REDUX_STORAGE_UPDATE":
      return reduxStorageUpdate(action.payload)
    default:
      return state
  }
}