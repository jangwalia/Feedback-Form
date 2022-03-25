import React from 'react'
import { useState } from 'react'
export default function Rating({selected}) {
  const [ratingSelect,setRatingSelect] = useState(10)
  const handleChange = (e) =>{
    setRatingSelect(+e.currentTarget.value)
    selected(+e.currentTarget.value)
  }
  return (
    <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
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
