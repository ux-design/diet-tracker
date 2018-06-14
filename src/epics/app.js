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
      Rx.Observable.of({
        type: "APP_AUTOLOGIN"
      })
    )
  })

export const APP_INIT_SUCCESS = (action$, store) =>
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
  })

export const APP_AUTOLOGIN = (action$) =>
  action$.ofType( 'APP_AUTOLOGIN' )
  .mergeMap( () => {
    return apiCall({
      method: "GET",
      url: "login",
      payload: {
        email: "mazzilli.andrea@gmail.com",
        password: "12345"
      }
    })
  })
  .map( data => {
    if (data.response === 'success') {
      console.log(data)
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
  .map( () => {
    return {
      type: "APP_INIT_SUCCESS"
    }
  })

export const APP_AUTOLOGIN_ERROR = action$ =>
  action$.ofType( 'APP_AUTOLOGIN_ERROR' )
  .map( () => {
    return {
      type: "ROUTE_CHANGE",
      payload: "login"
    }
  })