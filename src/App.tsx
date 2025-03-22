import TaskCard from './components/TaskCard.tsx';
import { tasks, statuses } from './utils/data-tasks.ts';

function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div>
          <h2 className='text-3xl p-2 capitalize font-bold text-gray-500'>
            {column.title}
          </h2>
          {column.tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
// https://youtu.be/gjrVCY3oPds?si=eXdPYfIj6f_gBtkN - 34:09
