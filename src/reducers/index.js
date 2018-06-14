import { combineReducers } from 'redux'

import app from './app'
import router from './router'
import user from './user'
import food from './food'

const reducers = combineReducers({
  app,
  router,
  user,
  food
})

export default reducers