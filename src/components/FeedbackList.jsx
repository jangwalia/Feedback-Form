import React from 'react'
import FeedBackItem from './FeedBackItem'
export default function FeedbackList({feedBack,removeItem}) {
  return (
    <div className= "feedback-list">
      {feedBack.map((item) => (
        <FeedBackItem handleClick={removeItem} id = {item.id} key = {item.id} text = {item.text} rating = {item.rating}/>
      ))}
      
    </div>
  )
}
