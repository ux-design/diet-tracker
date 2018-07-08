import {apiCall} from '../helpers'
import {map, filter, mergeMap} from 'rxjs/operators'

// FOOD 

export const FOOD_FETCH = (action$) => action$.pipe(
  filter(action => action.type === 'FOOD_FETCH'),
  mergeMap( () => {
    return apiCall({
      method: "GET",
      url: "food"
    })
  }),
  map(data => {
    if (data.response.success) {
      return {
        type: "FOOD_UPDATE",
        payload: data.response.success
      }
    } else {
      return {
        type: "FOOD_FETCH_ERROR"
      }
    }
  })
)