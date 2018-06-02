import Rx from 'rxjs'

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
    default:
      return Rx.Observable.of({ 
        response: "error"
      })
  }
}