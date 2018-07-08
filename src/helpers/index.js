import {Observable} from 'rxjs'
import {ajax} from 'rxjs/ajax'
import 'rxjs/add/observable/of'
import {apiServer} from '../config'

export const apiCallFake = (payload) => {
  switch (payload.url) {
    case"login":
      if (payload.method === 'GET') {
        if ( payload.payload.email === payload.store.getState().user.get('email') && payload.payload.password === payload.store.getState().user.get('password')) {
          return Observable.of({ 
            response: "success"
          })
        } else {
          return Observable.of({ 
              response: "error"
          })
        }
      }
      break
    case"food":
      if (payload.method === 'GET') {
        return Observable.of({ 
          response: "success",
          payload: payload.store.getState().apiFood
        })
      }
      break
    default:
      return Observable.of({ 
        response: "error"
      })
  }
}

export const apiCall = (payload) => {
  const method = payload.method === 'POST' ? payload.method : 'GET'
  return ajax({
      url: `${apiServer}/api/${payload.url}`,
      method: method,
      body: payload.data
    })
    /* .catch( err => { 
      return Observable.of({ 
        response: "error",
        payload: err.message
      })
    }) 
    .map( data => {
      if (data.response.success) {
        return {
          response: "success",
          payload: data.response.success
        }
      } else {
        return { 
          response: "error",
          payload: data.response.error
        }
      }
    })*/
}

export const storageGet = () => {
  if (window.localStorage.length === 0) {
    return Observable.of({
      response: "error"
    })
  } else {
    return Observable.of({
      response: "success",
      payload: window.localStorage ? {...window.localStorage} : {}
    })
  }
}

export const storageSet = payload => {
  const {key, value} = payload
  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value))
    return Observable.of({
      response: "success",
      payload: {key, value}
    })
  } else {
    return Observable.of({
      response: "error",
      payload: "value is undefined"
    })
  }
  
}