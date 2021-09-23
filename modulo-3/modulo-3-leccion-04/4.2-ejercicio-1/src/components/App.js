import '../styles/App.scss';
import { useState } from 'react';

function App() {
  let addClassName = 'done';
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const handleClickedTask = (ev) => {
    const clickedTask = ev.currentTarget.id;
    tasks[clickedTask].completed = !tasks[clickedTask].completed;
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    return tasks.map((eachTask, index) => {
      return (
        <li
          key={index}
          className={tasks.completed ? `${addClassName}` : ''}
          id={index}
          onClick={handleClickedTask}
        >
          {eachTask.task}
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Hola mundo</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
}
export default App;
