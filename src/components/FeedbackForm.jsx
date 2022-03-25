import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
export default function FeedbackForm() {
  const [text,setText] = useState('')
  const[btnDisabled,setBtnDisabled] = useState(true)
  const[message,setMessage] = useState('')
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
  return (
    <Card>
      <form>
        <h2>Give us your valuable feedback</h2>
        <div className="input-group">
          <input onChange={handleChange} type="text" placeholder="write a review" />
          <Button isDisabled = {btnDisabled} type="submit">Send</Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}
