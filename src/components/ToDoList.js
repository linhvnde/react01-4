// src/components/ToDoList.js

import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    isDone: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    isDone: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    isDone: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks];

    // Find the selected task and update task's `isDone` property,
    tasksCopy.forEach((task) => {
      if (task._id === id) {
        // Check the initial state of the task
        const wasDone = task.isDone;
        // Toggle the task's `isDone` property
        task.isDone = task.isDone ? false : true;
        // Adjust the `tasksCompleted` counter based on the task's initial state
        if (wasDone) {
          setTasksCompleted(tasksCompleted - 1);
        } else {
          setTasksCompleted(tasksCompleted + 1);
        }
      }
    });

    // update the todo list with the new task's status
    setTasks(tasksCopy);
  };
  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTaskDone} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
