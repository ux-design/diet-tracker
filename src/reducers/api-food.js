import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  "onion": {
    category: "vegetables",
    carb: 9.3,
    protein: 1.1,
    fat: 0
  },
  "tomato": {
    category: "vegetables",
    carb: 3.9,
    protein: 0.9,
    fat: 0
  },
  "carrot": {
    category: "vegetables",
    carb: 9.6,
    protein: 0.9,
    fat: 0.2
  },
  "lettuce": {
    category: "vegetables",
    carb: 3.2,
    protein: 0.9,
    fat: 0.1
  },
  "potato": {
    category: "vegetables",
    carb: 20.1,
    protein: 1.9,
    fat: 0.1
  },
  "blank1": {
    category: "vegetables",
    carb: 1,
    protein: 1,
    fat: 1
  },
  "blank2": {
    category: "vegetables",
    carb: 1,
    protein: 1,
    fat: 1
  },
  "blank3": {
    category: "vegetables",
    carb: 1,
    protein: 1,
    fat: 1
  },
  "blank4": {
    category: "vegetables",
    carb: 1,
    protein: 1,
    fat: 1
  },
  "blank5": {
    category: "vegetables",
    carb: 1,
    protein: 1,
    fat: 1
  }
})

export default ( state = initialState, action ) => {
  switch(action.type){
    default:
      return state
  }
}