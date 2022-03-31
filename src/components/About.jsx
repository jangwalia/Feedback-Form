import React from 'react'
import Card from './shared/Card'
import {Link} from 'react-router-dom'
export default function About() {
  return (
    <Card>
        <h1>FeedBack App</h1>
        <p>This is a react app to give feedback on a product or service</p>
        <Link to='/'>Go Home</Link>
    </Card>
  )
}
