import { apiCallFake } from '../helpers'

// FOOD 

export const FOOD_FETCH = (action$, store) =>
  action$.ofType( 'FOOD_FETCH' )
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