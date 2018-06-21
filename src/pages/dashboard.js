import React from 'react'
const Dashboard = ({fire}) => {
  const style = {position: 'relative', width: '200px', height: '200px'}
  return (
    <div className="content content--scrollable flex flex-wrap">
      <button onClick={() => {fire('ROUTE_CHANGE','browser-food')}}>
        browse food
      </button>
    </div>
  )
}

export default Dashboard