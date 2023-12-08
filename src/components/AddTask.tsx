import React, { useState } from 'react';
import { Task } from '../new_interfaces';

interface AddTaskProps {
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask: React.FC<AddTaskProps> = ({ list, setList }) => {
  const [task, setTask] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
 
      const newTask: Task = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setList((prevList) => [...prevList, newTask]);   
      setTask("");
    }else{
      alert("Cannot Add an empty task!");
    }
  };

  return (
    <div className="buttonIn">
      <input
        className="inputText"
        id="task"
        placeholder="Add your Task"
        value={task}
        onChange={handleInputChange}
      />
      <button className="btn" onClick={handleAddTask}>
        ADD
      </button>
    </div>
  );
};

export default AddTask;
