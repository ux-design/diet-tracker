import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import reducers from '../reducers'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { 
  APP_INIT,
  APP_AUTOLOGIN,
  APP_AUTOLOGIN_ERROR,
  APP_AUTOLOGIN_SUCCESS,
  USER_LOGIN,
  FOOD_FETCH
} from '../epics'

const epics = combineEpics( 
  APP_INIT,
  APP_AUTOLOGIN,
  APP_AUTOLOGIN_ERROR,
  APP_AUTOLOGIN_SUCCESS,
  USER_LOGIN,
  FOOD_FETCH
)
const epicMiddleware = createEpicMiddleware(epics)
var store
if (process.env.NODE_ENV === 'production') {
  store = createStore( reducers, applyMiddleware( epicMiddleware )  )
} else { 
  store = createStore( reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware( logger, epicMiddleware ) )
}
store.dispatch({type: 'APP_INIT'})
//store.dispatch({type: 'FOOD_FETCH'})

export default store