import React from 'react'
import {apiServer} from '../config'

const Logo = ({fire}) => {
  return (
    <div className="logo flex flex-center">
      <div onClick={() => {fire('ROUTE_CHANGE','/dashboard')}} className="logo__image" style={{ backgroundImage: `url(${apiServer}/assets/app/logo)` }}/>
    </div>
  )
}

export default Logo
