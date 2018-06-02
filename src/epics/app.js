import { apiCallFake } from '../helpers'

// APP 

export const APP_INIT = action$ =>
  action$.ofType( 'APP_INIT' )
  .map( data => {
    return {
      type: "APP_AUTOLOGIN_START"
    }
  })

export const APP_AUTOLOGIN_START = (action$, store) =>
  action$.ofType( 'APP_AUTOLOGIN_START' )
  .mergeMap( action => {
    return apiCallFake({
      method: "GET",
      url: "login",
      payload: {
        email: "mazzilli.andrea@gmail.com",
        password: "1234"
      },
      store: store
    })
  })
  .delay(1000)
  .map( data => {
    if (data.response === 'success') {
      return {
        type: "APP_AUTOLOGIN_SUCCESS"
      }
    } else {
      return {
        type: "APP_AUTOLOGIN_ERROR"
      }
    }
  })

export const APP_AUTOLOGIN_SUCCESS = action$ =>
  action$.ofType( 'APP_AUTOLOGIN_SUCCESS' )
  .map( data => {
    return {
      type: "APP_INIT_SUCCESS"
    }
  })