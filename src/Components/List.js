import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'
const List = ({task,index,removeTask}) => { 
  return (
    <div className='d-flex'>
        <div className='list'>
            <h1 className='listname'>{task.title}</h1> 
            </div>
            <Button onClick={()=>{removeTask(index)}} className='bg-danger delbtn'>Delete</Button>
    </div>
  )
}

export default List