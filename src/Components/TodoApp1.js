import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';
import List from './List';
import './style.css';
import Nav from './Nav';

const TodoApp1 = () => {
  const [tasks,setTask]=useState([])
  useEffect(()=>{
    document.title = `You have ${tasks.length} tasks`;
  })
  const addTask=(title)=>{
     const newTask=[...tasks,{title}];
     setTask(newTask)
  };
  const removeTask=(index)=>{
    const newTask=[...tasks]
    newTask.splice(index,1);
    setTask(newTask)

  }
  return (
    <>
        <div className='main-container'>
          <Nav />
        <div>
            <Task addTask={ addTask} />
        </div>
        <div>
        {tasks.map((task,index) => (
        <List  task={task} removeTask={removeTask}
        index={index}
        key={index} />
        ))}
            
        </div>
        </div>
    </>
  )
}

export default TodoApp1