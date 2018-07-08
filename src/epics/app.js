import {apiCall} from '../helpers'
import {Observable} from 'rxjs'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/concat'
import {map, filter, mergeMap} from 'rxjs/operators'
//import {delay} from '../config'
// APP 

export const APP_INIT = action$ => action$.pipe(
  filter(action => action.type === 'APP_INIT'),
  mergeMap( () => {
    return Observable.concat(
      Observable.of({
        type: "ROUTE_CHANGE",
        payload: "/updater"
      }),
      Observable.of({
        type: "STORAGE_GET",
      }),
      Observable.of({
        type: "APP_INIT_SUCCESS"
      }),
      Observable.of({
        type: "APP_AUTOLOGIN"
      })
    )
  })
)

export const APP_AUTOLOGIN = (action$, store) => action$.pipe(
  filter(action => action.type === 'APP_AUTOLOGIN'),
  mergeMap( () => {
    console.log(store.value.storage)
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
)

export const APP_AUTOLOGIN_SUCCESS = action$ => action$.pipe(
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
        payload: window.location.pathname !== '/' ? window.location.pathname : "/dashboard"
      })
    )
  })
)

export const APP_AUTOLOGIN_ERROR = action$ => action$.pipe(
  filter(action => action.type === 'APP_AUTOLOGIN_ERROR'),
  map( () => {
    return {
      type: "ROUTE_CHANGE",
      payload: "/login"
    }
  })
)
  