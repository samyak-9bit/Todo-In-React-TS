import React, { useState } from 'react';
import { Task } from './new_interfaces';
import Heading from './components/Heading';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


function App() {
  
// Initial state
  const[list,setList]=useState<Task[]>([]);

  
  
  return (
   <>
  <Heading/>
  <AddTask list={list} setList={setList}/>
  <TaskList list={list} setList={setList}/>
  
   </>
  );
}

export default App;
