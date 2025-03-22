import TaskCard from './components/TaskCard.tsx';
import { tasks } from './utils/data-tasks.ts';

function App() {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}

export default App;
// https://youtu.be/gjrVCY3oPds?si=eXdPYfIj6f_gBtkN - 34:09
