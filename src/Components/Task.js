import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Task = ( {addTask}) => {
  const [value,setValue]=useState("");
  const addItem=()=>{
    addTask(value);
    setValue("");
  }
  return (
    <>
        <div>
            <input className='input' type='text' placeholder='Add Task'
             onChange={(e) => {
  setValue(e.target.value);
}} value={value}
   />
            <Button onClick={addItem}>Add</Button>
            </div> 
    </>
  )
}

export default Task