import React from 'react'

const Logo = ({fire}) => {
  return (
    <div className="logo animation__spin--loop-slow flex flex-center">
      <div onClick={() => {fire('ROUTE_CHANGE','dashboard')}} className="logo__image" />
    </div>
  )
}

export default Logo
