import { useState } from 'react';
import '../App.css';
import Header from './Header';
import FeedbackList from './FeedbackList';
import FeedbackData from '../data/data';
import FeedBackStats from './FeedBackStats';
function App() {
  const [feedBack,setFeedBack] = useState(FeedbackData)
  const removeFeedBack = (id) =>{
    const updatedList = feedBack.filter(item => item.id !== id)
    setFeedBack(updatedList)
  }
  return (
    <div className="App">
     <Header text = "FeedBack UI"/>
     <div className="container">
       <FeedBackStats data={feedBack}/>
      <FeedbackList removeItem={removeFeedBack} feedBack={feedBack}/>
     </div>
     
    </div>
  );
}

export default App;
