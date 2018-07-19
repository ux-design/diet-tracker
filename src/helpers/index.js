import {Observable} from 'rxjs'
import {ajax} from 'rxjs/ajax'
import 'rxjs/add/observable/of'
import {apiServer} from '../config'

export const getAddressBarUrl = (logged) => {
  switch(window.location.pathname) {
    case"/dashboard":
      return "/dashboard"
    case"/browser-food":
      return "/browser-food"
    case"/login":
    console.log(logged)
      if(logged){
        return "/dashboard"
      }else{
        return "/login"
      }
    case"/password-forget":
      return "/password-forget"
    case"/account-create":
      return "/account-create"
    default:
      return "/dashboard"
  }
}

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
  return Observable.fromPromise(new Promise((resolve, reject) => {
    if (window.localStorage.length === 0) {
      resolve({
        type: "STORAGE_ERROR"
      })
    } else {
      resolve({
        type: "REDUX_STORAGE_UPDATE",
        payload: window.localStorage ? {...window.localStorage} : {}
      })
    }
  }))
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