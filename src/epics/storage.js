import {storageGet, storageSet} from '../helpers'
import {map, filter, mergeMap} from 'rxjs/operators'

// STORAGE

export const STORAGE_GET = (action$) => action$.pipe(
  filter(action => action.type === 'STORAGE_GET'),
  mergeMap( () => {
    return storageGet()
  }),
  map( data => {
    if (data.response === 'success') {
      return {
        type: "REDUX_STORAGE_UPDATE",
        payload: data.payload
      }
    } else {
      return {
        type: "STORAGE_ERROR"
      }
    }
  })
)

export const STORAGE_SET = (action$) => action$.pipe(
  filter(action => action.type === 'STORAGE_SET'),
  mergeMap( action => {
    return storageSet(action.payload)
  }),
  map( data => {
    if (data.response === 'success') {
      return {
        type: "REDUX_STORAGE_UPDATE",
        payload: data.payload
      }
    } else {
      return {
        type: "STORAGE_ERROR"
      }
    }
  })
)