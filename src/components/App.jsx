import { useState } from 'react';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'
import '../App.css';
import Header from './Header';
import FeedbackList from './FeedbackList';
import FeedbackData from '../data/data';
import FeedBackStats from './FeedBackStats';
import FeedbackForm from './FeedbackForm';
import About from './About';
function App() {
  const [feedBack,setFeedBack] = useState(FeedbackData)
  const [feedbackEdit,setfeedbackEdit] = useState({
    item : {},
    edit : false
  })
  const editFeedBack = (updatedFeedBack) =>{
    setfeedbackEdit({
      item : updatedFeedBack,
      edit :true
    })
  }
  const addEditFeedback = (id,updatedData)=>{
    setFeedBack(feedBack.map(item => item.id === id ? {...item,...updatedData} : item))
  }
  const AddFeedBack = (newFeedBack)=>{
    setFeedBack([newFeedBack,...feedBack])
  }
  const removeFeedBack = (id) =>{
    const updatedList = feedBack.filter(item => item.id !== id)
    setFeedBack(updatedList)
  }
  
  return (
    <div className="App">
    <Router>
    <Header text = "FeedBack UI"/>
    
    <div className="container">

      <Routes>
        <Route exact path='/' element={
          <>
           <FeedbackForm
            editStatus = {feedbackEdit} 
            handleAddFeedback = {AddFeedBack}
            handleEditSubmission = {addEditFeedback}
          />
           <Link to='/about'>About US</Link>
          <FeedBackStats data={feedBack}/>
          <FeedbackList editItem = {editFeedBack} removeItem={removeFeedBack} feedBack={feedBack}/>
          </>
        }>
    </Route>
    <Route path='/about' element = {<About/>}/>
    </Routes>
      
      
     </div>
    </Router>
    
     
    </div>
  );
}

export default App;
