import Rx from 'rxjs'

const APP_INIT = action$ =>
  action$.ofType( 'APP_INIT' )
  .map( data => {
    return {
      type: "APP_INIT_SUCCESS"
    }
  })

export { 
  APP_INIT
}