import { useState } from 'react';
import TaskCard from './components/TaskCard.tsx';
import {
  tasks as initialTasks,
  Status,
  statuses,
  Task,
} from './utils/data-tasks.ts';

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });
    setTasks(updatedTasks);
  };

  const handleDrop = (e: React.DragEvent, status: Status) => {
    e.preventDefault();
    setCurrentlyHoveringOver(null);
    const id = e.dataTransfer.getData('id');
    const task = tasks.find((t) => t.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };

  const [currentlyHoveringOver, setCurrentlyHoveringOver] =
    useState<Status | null>(null);
  const handleDragEnter = (status: Status) => {
    setCurrentlyHoveringOver(status);
  };

  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div
          onDrop={(e) => handleDrop(e, column.status)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => handleDragEnter(column.status)}>
          <div className='flex justify-between text-3xl p-2 text-gray-500 font-bold'>
            <h2 className='capitalize'>{column.status}</h2>
            {column.tasks.reduce(
              (total, task) => total + (task?.points || 0),
              0
            )}
          </div>
          <div
            className={`h-full ${
              currentlyHoveringOver === column.status ? 'bg-gray-200' : ''
            }`}>
            {column.tasks.map((task) => (
              <TaskCard task={task} updateTask={updateTask} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
// https://youtu.be/gjrVCY3oPds?si=eXdPYfIj6f_gBtkN - 34:09
