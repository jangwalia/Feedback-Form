import { useState } from 'react';
import '../App.css';
import Header from './Header';
import FeedbackList from './FeedbackList';
import FeedbackData from '../data/data';
import FeedBackStats from './FeedBackStats';
import FeedbackForm from './FeedbackForm';
function App() {
  const [feedBack,setFeedBack] = useState(FeedbackData)
  const AddFeedBack = (newFeedBack)=>{
    setFeedBack([newFeedBack,...feedBack])
  }
  const removeFeedBack = (id) =>{
    const updatedList = feedBack.filter(item => item.id !== id)
    setFeedBack(updatedList)
  }
  return (
    <div className="App">
     <Header text = "FeedBack UI"/>
     <div className="container">
       <FeedbackForm handleAddFeedback = {AddFeedBack}/>
       <FeedBackStats data={feedBack}/>
      <FeedbackList removeItem={removeFeedBack} feedBack={feedBack}/>
     </div>
     
    </div>
  );
}

export default App;
