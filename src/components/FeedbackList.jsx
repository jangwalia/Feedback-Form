import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedBackItem'
export default function FeedbackList({feedBack,removeItem,editItem}) {
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
            <FeedBackItem handleEdit={editItem} handleClick={removeItem} item={item}/>
         
        </motion.div>
        ))}
      </AnimatePresence>
     
      
    </div>
  )
}
