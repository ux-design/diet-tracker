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
  "broccoli": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "cucumber": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "mais": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "mushroom": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "pepper_green": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "pepper_red": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "pepper_yellow": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "zucchini": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  },
  "eggplant": {
    category: "vegetables",
    carb: 0,
    protein: 0,
    fat: 0
  }
})

export default ( state = initialState, action ) => {
  switch(action.type){
    default:
      return state
  }
}