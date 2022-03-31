import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import FeedbackList from "./FeedbackList";
import FeedbackData from "../data/data";
import FeedBackStats from "./FeedBackStats";
import FeedbackForm from "./FeedbackForm";
import About from "./About";
function App() {
  //creating state for feedback and edit feedback
  const [feedBack, setFeedBack] = useState(FeedbackData);
  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //edit feedback
  const editFeedBack = (updatedFeedBack) => {
    setfeedbackEdit({
      item: updatedFeedBack,
      edit: true,
    });
  };
  //adding editfeedback back to form data
  const addEditFeedback = (id, updatedData) => {
    setFeedBack(
      feedBack.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
  };
  //adding new feedback
  const AddFeedBack = (newFeedBack) => {
    setFeedBack([newFeedBack, ...feedBack]);
  };
  //remmove feedback
  const removeFeedBack = (id) => {
    const updatedList = feedBack.filter((item) => item.id !== id);
    setFeedBack(updatedList);
  };

  return (
    <div className="App">
      <Router>
        <Header text="FeedBack UI" />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm
                    editStatus={feedbackEdit}
                    handleAddFeedback={AddFeedBack}
                    handleEditSubmission={addEditFeedback}
                  />
                  <Link className="about" to="/about">About US</Link>
                  <FeedBackStats data={feedBack} />
                  <FeedbackList
                    editItem={editFeedBack}
                    removeItem={removeFeedBack}
                    feedBack={feedBack}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
