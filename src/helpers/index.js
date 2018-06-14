import Rx from 'rxjs'
import {apiServer} from '../config'

export const apiCallFake = (payload) => {
  switch (payload.url) {
    case"login":
      if (payload.method === 'GET') {
        if (  payload.payload.email === payload.store.getState().user.get('email') && payload.payload.password === payload.store.getState().user.get('password')) {
          return Rx.Observable.of({ 
            response: "success"
          })
        } else {
          return Rx.Observable.of({ 
              response: "error"
          })
        }
      }
      break
    case"food":
      if (payload.method === 'GET') {
        return Rx.Observable.of({ 
          response: "success",
          payload: payload.store.getState().apiFood
        })
      }
      break
    default:
      return Rx.Observable.of({ 
        response: "error"
      })
  }
}

export const apiCall = (payload) => {
  return Rx.Observable
    .ajax({
      url: `${apiServer}/api/${payload.url}`,
      method: 'GET'
    })
    .catch( err => { 
      return { 
        response: "error",
        payload: err
      }
    })
    .map( data => {
      if (data.response.error) {
        return {
          response: "error",
          payload: data.response.error
        }
      } else {
        return { 
          response: "success",
          payload: data.response
        }
      }
    })
}