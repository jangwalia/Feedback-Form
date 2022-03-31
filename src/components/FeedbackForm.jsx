import React from "react";
import { useState,useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Rating from "./Rating";
export default function FeedbackForm({handleAddFeedback,editStatus,handleEditSubmission}) {
  const [text,setText] = useState('')
  const[btnDisabled,setBtnDisabled] = useState(true)
  const[message,setMessage] = useState('')
  const [rating,setRating] = useState(5)
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedBack = {
        id: Math.random().toString(),
        text,
        rating
      }
    if(editStatus.edit === true){
      handleEditSubmission(editStatus.item.id,newFeedBack)
    } else{
      handleAddFeedback(newFeedBack)
    }
    setText('')
    
  }
  }
  const handleChange = (e)=>{
    if(text === ''){
      setBtnDisabled(true)
      setMessage('null')
    }else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setMessage('Text should be atleast 10 Characters..')
    }else{
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
    
  }
  useEffect(()=>{
    if(editStatus.edit === true){
      setBtnDisabled(false)
      setText(editStatus.item.text)
      setRating(editStatus.item.rating)
    }
  },[editStatus])
  return (
    <Card>
      <h2>Give us your valuable feedback</h2>
      <form onSubmit={handleSubmit}>
        <Rating ratingEdit = {editStatus} selected={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input value = {text} onChange={handleChange} type="text" placeholder="write a review" />
          <Button isDisabled = {btnDisabled} type="submit">Send</Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}
