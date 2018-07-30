import React from 'react'
const Dashboard = ({fire}) => {
  return (
    <div className="content content--scrollable flex flex-wrap flex-center">
      <button className="btn btn--primary w-50" onClick={() => {fire('ROUTE_CHANGE','/browser-food')}}>
        browse food
      </button>
    </div>
  )
}

export default Dashboard