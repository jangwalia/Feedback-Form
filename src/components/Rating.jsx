import React from 'react'
import { useState,useEffect } from 'react'
export default function Rating({selected,ratingEdit}) {
  const [ratingSelect,setRatingSelect] = useState(5)
  const handleChange = (e) =>{
    setRatingSelect(+e.currentTarget.value)
    selected(+e.currentTarget.value)
  }
  //handle side effect to edit rating by clicking edit button
  useEffect(()=>{
    setRatingSelect(ratingEdit.item.rating)
  },[ratingEdit])
  return (
    <ul className='rating'>
  //creating array of listitems where ech list item is radio button
    {Array.from({ length: 5 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={ratingSelect === i + 1}
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
  )
}
