import { combineReducers } from 'redux'

import app from './app'
import router from './router'
import user from './user'
import food from './food'
import guide from './guide'
import storage from './storage'

const reducers = combineReducers({
  app,
  router,
  user,
  food,
  guide,
  storage
})

export default reducers