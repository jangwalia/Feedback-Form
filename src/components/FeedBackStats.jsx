import React from 'react'

export default function FeedBackStats({data}) {
  //component to show the average rating and number of reviews 
  // available
  let average = data.reduce((acc,curr)=>{
    return (acc + curr.rating)/data.length
  },0)
  average = average.toFixed(1);
  return (
    <div className='feedback-stats'>
      <h4>{data.length } {data.length > 1 ? "Reviews" : "Review"}</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
