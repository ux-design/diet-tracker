import React from 'react'
import logo from '../svg/logo.svg'

const Logo = ({fire}) => {
  return (
    <div className="logo animation__spin--loop flex flex-center">
      <img src={logo} onClick={() => {fire('ROUTE_CHANGE','dashboard')}} className="logo__image" alt="logo" />
    </div>
  )
}

export default Logo
