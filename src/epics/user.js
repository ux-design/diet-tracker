import {apiCall} from '../helpers'

// USER 

export const USER_LOGIN = (action$) =>
  action$.ofType( 'USER_LOGIN' )
  .mergeMap( () => {
    return apiCall({
      method: "POST",
      url: "user-login"
    })
  })
  .map( data => {
    console.log(data)
    if (data.response === 'success') {
      return {
        type: "USER_UPDATE",
        payload: data.payload
      }
    } else {
      return {
        type: "USER_FETCH_ERROR"
      }
    }
  })
