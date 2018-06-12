import { combineReducers } from 'redux'

import app from './app'
import router from './router'
import user from './user'
import apiUsers from './api-users'
import apiFood from './api-food'
import food from './food'

const reducers = combineReducers({
  app,
  router,
  user,
  apiUsers,
  apiFood,
  food
})

export default reducers