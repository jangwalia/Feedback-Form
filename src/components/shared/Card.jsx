import React from 'react'

export default function Card({children}) {
  //card component which will be used in other components
  return (
    <div className='card'>
      {children}
    </div>
  )
}
