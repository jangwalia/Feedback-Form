import React from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import '../App.css'
export default function FeedBackItem({item,handleClick,handleEdit}) {

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className="close">
        <button className='close' onClick = {()=>handleClick(item.id)}><FaTimes  color = 'purple'/></button> 
        <button className='edit' onClick = {()=>handleEdit(item)}><FaEdit  color='purple'/></button> 
        
      </div>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}
