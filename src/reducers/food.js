import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  items: {}
})

const foodSave = (state, food) => {
  return state.set('items', Immutable.fromJS(food))
}

export default ( state = initialState, action ) => {
  switch(action.type){
    case"FOOD_UPDATE":
      return foodSave(state, action.payload)
    default:
      return state
  }
}