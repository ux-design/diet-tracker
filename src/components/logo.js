import React from 'react'
import {apiServer} from '../config'

const Logo = () => {
  return (
    <div className="logo flex flex-center">
      <div className="logo__image" style={{ backgroundImage: `url(${apiServer}/assets/app/logo)` }}/>
    </div>
  )
}

export default Logo
