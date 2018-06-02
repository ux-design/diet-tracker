import { combineReducers } from 'redux'

import app from './app'
import user from './user'
import apiUsers from './api-users'
import apiFood from './api-food'

const reducers = combineReducers({
  app,
  user,
  apiUsers,
  apiFood
})

export default reducers