import { apiCallFake } from '../helpers'
import Rx from 'rxjs'

// APP 

export const APP_INIT = action$ =>
  action$.ofType( 'APP_INIT' )
  .mergeMap( () => {
    return Rx.Observable.concat(
      Rx.Observable.of({
        type: "APP_ROUTE",
        payload: "updater"
      }),
      Rx.Observable.of({
        type: "APP_AUTOLOGIN"
      })
    )
  })

export const APP_INIT_SUCCESS = (action$, store) =>
  action$.ofType( 'APP_INIT_SUCCESS' )
  .map( () => {
    const logged = store.getState().user.get('logged')
    if (logged) {
      return {
        type: "APP_ROUTE",
        payload: "dashboard"
      }
    } else {
      return {
        type: "APP_ROUTE",
        payload: "login"
      }
    }
  })

export const APP_AUTOLOGIN = (action$, store) =>
  action$.ofType( 'APP_AUTOLOGIN' )
  .mergeMap( () => {
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