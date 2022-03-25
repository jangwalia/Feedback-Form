import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedBackItem'
export default function FeedbackList({feedBack,removeItem}) {
  return (
    <div className= "feedback-list">
      <AnimatePresence>
      {feedBack.map((item) => (
        <motion.div
          key = {item.id}
          initial={{opacity : 0}}
          animate={{opacity: 1}}
          exit={{opacity:0}}
      >
            <FeedBackItem handleClick={removeItem} id = {item.id} key = {item.id} text = {item.text} rating = {item.rating}/>
         
        </motion.div>
        ))}
      </AnimatePresence>
     
      
    </div>
  )
}
