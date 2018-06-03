import { combineReducers } from 'redux'

import app from './app'
import user from './user'
import apiUsers from './api-users'
import apiFood from './api-food'
import food from './food'

const reducers = combineReducers({
  app,
  user,
  apiUsers,
  apiFood,
  food
})

export default reducers