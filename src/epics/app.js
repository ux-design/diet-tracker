import {apiCall} from '../helpers'
import {Observable} from 'rxjs'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/concat'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/interval'
import {map, filter, mergeMap, tap} from 'rxjs/operators'
import {storageGet, getAddressBarUrl} from '../helpers'
import {serverAliveCheckFrequency} from '../config'

// APP 

export const APP_CHECK_SERVER_STATUS_LOOP = action$ => action$.pipe(
  filter(action => action.type === 'APP_CHECK_SERVER_STATUS_LOOP'),
  mergeMap( () => {
    return Observable.interval(serverAliveCheckFrequency)
  }),
  map( () => {
    return {
      type: 'APP_CHECK_SERVER_STATUS'
    }
  })
)

export const APP_CHECK_ENV = action$ => action$.pipe(
  filter(action => action.type === 'APP_CHECK_ENV'),
  mergeMap( () => {
    return apiCall({
      method: "GET",
      url: "ip"
    })
  }),
  map(data => {
    if (data.response.success) {
      if (data.response.success && data.response.success === window.location.hostname) {
        return {
          type: "APP_INIT"
        }
      } else {
        return {
          type: "APP_REDIRECT",
          payload: data.response.success
        }
      }
    } else {
      return {
        type: "SERVER_DOWN"
      }
    }
  })
)

export const APP_REDIRECT = action$ => action$.pipe(
  filter(action => action.type === 'APP_REDIRECT'),
  tap( action => {
    window.location = `${window.location.protocol}//${action.payload}:3000${window.location.pathname}`
  }),
  map( () => {
    return {
      type: "APP_REDIRECT_SUCCESS"
    }
  })
)

export const APP_INIT = action$ => action$.pipe(
  filter(action => action.type === 'APP_INIT'),
  mergeMap( () => {
    return Observable.concat(
      Observable.of({
        type: "ROUTE_CHANGE",
        payload: "/updater"
      }),
      storageGet(),
      Observable.of({
        type: "APP_INIT_SUCCESS"
      }),
      Observable.of({
        type: "APP_CHECK_SERVER_STATUS_LOOP"
      }),
      Observable.of({
        type: "APP_AUTOLOGIN"
      })
    )
  })
)

export const APP_CHECK_SERVER_STATUS = action$ => action$.pipe(
  filter(action => action.type === 'APP_CHECK_SERVER_STATUS'),
  mergeMap( () => {
    return apiCall({
      method: "GET",
      url: "ping"
    })
  }),
  map( data => {
    if (data.response.success) {
      return {
        type: "SERVER_ALIVE"
      }
    } else {
      return {
        type: "SERVER_DOWN"
      }
    }
  })
)

export const APP_AUTOLOGIN = (action$, store) => action$.pipe(
  filter(action => action.type === 'APP_AUTOLOGIN'),
  mergeMap( () => {
    const user = store.value.storage.get('user')    
    if (user) {
      return apiCall({
        method: "POST",
        url: "login",
        data: {
          email: user.get('email'),
          password: user.get('password')
        }
      })
    } else {
      return Observable.of({
        response: 'error'
      })
    }
  }),
  map( data => {
    if (data.response.success) {
      return {
        type: "APP_AUTOLOGIN_SUCCESS",
        payload: data.response.success
      }
    } else {
      return {
        type: "APP_AUTOLOGIN_ERROR"
      }
    }
  })
)

export const APP_AUTOLOGIN_SUCCESS = (action$, store) => action$.pipe(
  filter(action => action.type === 'APP_AUTOLOGIN_SUCCESS'),
  mergeMap( (data) => {
    return Observable.concat(
      Observable.of({
        type: "USER_UPDATE",
        payload: data.payload
      }),
      Observable.of({
        type: "FOOD_FETCH"
      }),
      Observable.of({
        type: "ROUTE_CHANGE",
        payload: getAddressBarUrl(true)
      })
    )
  })
)

export const APP_AUTOLOGIN_ERROR = action$ => action$.pipe(
  filter(action => action.type === 'APP_AUTOLOGIN_ERROR'),
  map( () => {
    if ( getAddressBarUrl() !== '/account-create' &&
      getAddressBarUrl() !== '/password-forget' ) {
      return {
        type: "ROUTE_CHANGE",
        payload: "/login"
      }
    } else {
      return {
        type: "ROUTE_CHANGE",
        payload: getAddressBarUrl()
      }
    }
    
  })
)
  