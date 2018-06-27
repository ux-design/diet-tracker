import {storageGet} from '../helpers'

// STORAGE

export const STORAGE_GET = (action$) =>
  action$.ofType( 'STORAGE_GET' )
  .mergeMap( () => {
    return storageGet()
  })
  .map( data => {
    console.log(data)
    if (data.response === 'success') {
      return {
        type: "STORAGE_UPDATE",
        payload: data.payload
      }
    } else {
      return {
        type: "STORAGE_ERROR"
      }
    }
  })