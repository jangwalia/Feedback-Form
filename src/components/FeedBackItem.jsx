import React from 'react'
import {FaTimes} from 'react-icons/fa'
export default function FeedBackItem({id,text,rating,handleClick}) {
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className="close">
        <FaTimes onClick = {()=>handleClick(id)} color = 'purple'/>
      </div>
      <div className='text-display'>{text}</div>
    </div>
  )
}
