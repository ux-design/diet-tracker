import {apiCall} from '../helpers'
import Rx from 'rxjs'

// APP 

export const APP_INIT = action$ =>
  action$.ofType( 'APP_INIT' )
  .mergeMap( () => {
    return Rx.Observable.concat(
      Rx.Observable.of({
        type: "ROUTE_CHANGE",
        payload: "updater"
      }),
      Rx.Observable.empty()
        .delay(1000),
      Rx.Observable.of({
        type: "APP_INIT_SUCCESS"
      }),
      Rx.Observable.of({
        type: "APP_AUTOLOGIN"
      })
    )
  })

/* export const APP_INIT_SUCCESS = (action$, store) =>
  action$.ofType( 'APP_INIT_SUCCESS' )
  .map( () => {
    const logged = store.getState().user.get('logged')
    const path = window.location.pathname
    if (logged) {
      return {
        type: "ROUTE_CHANGE",
        payload: path === '/' ? 'dashboard' : path
      }
    } else {
      return {
        type: "ROUTE_CHANGE",
        payload: "login"
      }
    }
  }) */

export const APP_AUTOLOGIN = (action$) =>
  action$.ofType( 'APP_AUTOLOGIN' )
  .mergeMap( () => {
    return apiCall({
      method: "POST",
      url: "login",
      data: {
        email: "mazzilli.andrea@gmail.com",
        password: "1234"
      }
    })
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
        payload: "dashboard"
      })
    )
  })

export const APP_AUTOLOGIN_ERROR = action$ =>
  action$.ofType( 'APP_AUTOLOGIN_ERROR' )
  .map( () => {
    return {
      type: "ROUTE_CHANGE",
      payload: "login"
    }
  })