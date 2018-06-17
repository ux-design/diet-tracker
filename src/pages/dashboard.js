import React from 'react'

const Dashboard = ({fire}) => {
  return (
    <div className="content content--scrollable">
      <button onClick={() => {fire('ROUTE_CHANGE','browser-food')}}>browse food</button>
    </div>
  )
}

export default Dashboard