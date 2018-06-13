import {apiCall} from '../helpers'

// FOOD 

export const FOOD_FETCH = (action$) =>
  action$.ofType( 'FOOD_FETCH' )
  .mergeMap( action => {
    return apiCall({
      method: "GET",
      url: "food"
    })
  })
  .map( data => {
    console.log(data)
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