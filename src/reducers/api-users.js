import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  "mazzilli.andrea@gmail.com": {
    password: "1234",
    status: "active",
    firstname: "andrea",
    lastname: "",
    birth: "19760209",
    weight: 85,
    height: 180,
    units: "metric"
  }
})

export default ( state = initialState, action ) => {
  switch(action.type){
    default:
      return state
  }
}