import {apiCall} from '../helpers'

// FOOD 

export const FOOD_FETCH = (action$) =>
  action$.ofType( 'FOOD_FETCH' )
  .mergeMap( () => {
    return apiCall({
      method: "GET",
      url: "food"
    })
  })
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