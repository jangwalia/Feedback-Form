import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedBackItem'
export default function FeedbackList({feedBack,removeItem,editItem}) {
  return (
    <div className= "feedback-list">
      //using framer-motion package to delay the display on each item
      <AnimatePresence>
      //each item is shown by mapping through the feedback which is passed as props
      {feedBack.map((item) => (
        <motion.div
          key = {item.id}
          initial={{opacity : 0}}
          animate={{opacity: 1}}
          exit={{opacity:0}}
      >
            <FeedBackItem handleEdit={editItem} handleClick={removeItem} item={item}/>
         
        </motion.div>
        ))}
      </AnimatePresence>
     
      
    </div>
  )
}
