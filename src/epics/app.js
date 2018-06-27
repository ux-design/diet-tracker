import {apiCall} from '../helpers'
import Rx from 'rxjs'
import { delay } from '../config'

// APP 

export const APP_INIT = action$ =>
  action$.ofType( 'APP_INIT' )
  .delay(delay)
  .mergeMap( () => {
    return Rx.Observable.concat(
      Rx.Observable.of({
        type: "ROUTE_CHANGE",
        payload: "/updater"
      }),
      Rx.Observable.of({
        type: "STORAGE_GET",
      }),
      Rx.Observable.empty()
        .delay(delay),
      Rx.Observable.of({
        type: "APP_INIT_SUCCESS"
      }),
      Rx.Observable.of({
        type: "APP_AUTOLOGIN"
      })
    )
  })

export const APP_AUTOLOGIN = (action$, store) =>
  action$.ofType( 'APP_AUTOLOGIN' )
  .delay(delay)
  .mergeMap( () => {
    const user = store.getState().storage.get('data').user
    if (user) {
      return apiCall({
        method: "POST",
        url: "login",
        data: {
          email: user.email,
          password: user.password
        }
      })
    } else {
      return Rx.Observable.of({
        response: 'error'
      })
    }
  })
  .map( data => {
    if (data.response === 'success') {
      return {
        type: "APP_AUTOLOGIN_SUCCESS",
        payload: data.payload
      }
    } else {
      return {
        type: "APP_AUTOLOGIN_ERROR"
      }
    }
  })

export const APP_AUTOLOGIN_SUCCESS = action$ =>
  action$.ofType( 'APP_AUTOLOGIN_SUCCESS' )
  .delay(delay)
  .mergeMap( (data) => {
    return Rx.Observable.concat(
      Rx.Observable.of({
        type: "USER_UPDATE",
        payload: data.payload
      }),
      Rx.Observable.of({
        type: "FOOD_FETCH"
      }),
      Rx.Observable.of({
        type: "ROUTE_CHANGE",
        payload: window.location.pathname !== '/' ? window.location.pathname : "/dashboard"
      })
    )
  })

export const APP_AUTOLOGIN_ERROR = action$ =>
  action$.ofType( 'APP_AUTOLOGIN_ERROR' )
  .delay(delay)
  .map( () => {
    return {
      type: "ROUTE_CHANGE",
      payload: "/login"
    }
  })
  