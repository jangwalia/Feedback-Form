import React from 'react'

export default function Header({text}) {
  return (
    <header>
      //component use text which is passed as props to show in h2 tag
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
   
  )
}
