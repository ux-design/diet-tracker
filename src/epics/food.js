import { apiCallFake } from '../helpers'

// FOOD 

export const FOOD_FETCH = action$ =>
  action$.ofType( 'FOOD_FETCH' )
  .map( data => {
    return {
      type: "FOOD_FETCH_START"
    }
  })

export const FOOD_FETCH_START = (action$, store) =>
  action$.ofType( 'FOOD_FETCH_START' )
  .mergeMap( action => {
    return apiCallFake({
      method: "GET",
      url: "food",
      store: store
    })
  })
  .delay(1000)
  .map( data => {
    if (data.response === 'success') {
      return {
        type: "FOOD_UPDATE",
        payload: data.payload
      }
    } else {
      return {
        type: "FOOD_FETCH_ERROR"
      }
    }
  })