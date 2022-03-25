import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
export default function FeedBackItem({id,text,rating,handleClick}) {
  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <div className="close">
        <FaTimes onClick = {()=>handleClick(id)} color = 'purple'/>
      </div>
      <div className='text-display'>{text}</div>
    </Card>
  )
}
