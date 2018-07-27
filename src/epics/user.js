import {apiCall, getAddressBarUrl} from '../helpers'
import {Observable} from 'rxjs'
import {map, filter, mergeMap} from 'rxjs/operators'

// USER 

export const USER_LOGIN = (action$) => action$.pipe(
  filter(action => action.type === 'USER_LOGIN'),
  mergeMap( action => {
    const {payload} = action
    return apiCall({
      method: "POST",
      url: "login",
      data: {
        email: payload.email,
        password: payload.password
      }
    })
  }),
  map( data => {
    if (data.response.success) {
      return {
        type: "USER_UPDATE",
        payload: data.response.success
      }
    } else {
      return {
        type: "USER_FETCH_ERROR"
      }
    }
  })
)

export const USER_UPDATE = (action$, store) => action$.pipe(
  filter(action => action.type === 'USER_UPDATE'),
  mergeMap( action => {
    return Observable.concat(
      Observable.of({
        type: 'STORAGE_SET',
        payload: {key: 'user', value: action.payload}
      }),
      Observable.of({
        type: "FOOD_FETCH"
      }),
      Observable.of({
        type: 'ROUTE_CHANGE',
        payload: getAddressBarUrl(store.value.user.get('logged')    )
      })
    )
  })
)

export const USER_REGISTER = (action$) => action$.pipe(
  filter(action => action.type === 'USER_REGISTER'),
  mergeMap( action => {
    const {payload} = action
    return apiCall({
      method: "POST",
      url: "register",
      data: payload
    })
  }),
  map( data => {
    if (data.response.success) {
      return {
        type: "ROUTE_CHANGE",
        payload: '/login'
      }
    } else {
      return {
        type: "USER_FETCH_ERROR"
      }
    }
  })
)
