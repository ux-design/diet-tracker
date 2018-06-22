import React from 'react'
import Logo from './logo'

const Navigation = ({fire, route}) => {
  return (
    <div className="header2 flex flex-row flex-center">
      <Logo fire={fire}/>
      <h1 className="header__title">{route}</h1>
    </div>
  )
}

export default Navigation
