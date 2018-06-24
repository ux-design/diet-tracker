import React from 'react'
import Logo from './logo'

const Navigation = ({fire, route}) => {
  return (
    <div className="header2 flex flex-row flex-center">
      <div className="header2__logo flex flex-center">
        <Logo fire={fire}/> 
      </div>
      <h1 className="header2__title">{route}</h1>
      <div className="header2__menu flex flex-center">
        <p>M</p>
      </div>
    </div>
  )
}

export default Navigation
