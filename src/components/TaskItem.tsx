import React from "react";
import { Task } from "../new_interfaces";

interface TaskListProps {
  task: Task;
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem: React.FC<TaskListProps> = ({ task, list, setList }) => {
  const handleEdit = () => {
    const editedText = prompt("Edit task:", task.text);

    if (editedText !== null) {
      const updatedList = list.map((item) =>
        item.id === task.id ? { ...item, text: editedText } : item
      );

      setList(updatedList);
    }
  };

  const handleToggleComplete = () => {
    const updatedList = list.map((item) =>
      item.id === task.id ? { ...item, completed: !item.completed } : item
    );

    setList(updatedList);
  };

  const handleDelete = () => {
    const updatedList = list.filter((item) => item.id !== task.id);
    setList(updatedList);
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
        />
      </td>
      <td className={task.completed ? "strikeText" : "plainText"}>
        {task.text}
      </td>
      <td
        className="task-icon tooltip"
        id={`editBtn${task.id}`}
        onClick={handleEdit}
      >
        <i className="fa-solid fa-pen" style={{ color: "#969FA2" }} />
        <span className="tooltiptext">Edit</span>
      </td>
      <td className="task-icon tooltip" onClick={handleDelete}>
        <i
          className="fa-solid fa-xmark"
          style={{ color: "#969FA2", fontSize: 24 }}
        />
        <span className="tooltiptext">Remove</span>
      </td>
    </tr>
  );
};

export default TaskItem;
