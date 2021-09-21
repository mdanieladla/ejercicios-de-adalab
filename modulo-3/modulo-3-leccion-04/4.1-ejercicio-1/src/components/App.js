import '../styles/App.scss';

function App() {
  //Ejercicio 1: array de strings
  // const tasks = [
  //   'Comprar harina, jamón y pan rallado',
  //   'Hacer croquetas ricas',
  //   'Ir a la puerta de un gimnasio',
  //   'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  // ];

  // const renderTasks = () => {
  //   return tasks.map((task) => {
  //     return <li>{task}</li>;
  //   });
  // };

  /* *** */

  //Ejercicio 2: array de objetos
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasks = () => {
    return tasks.map((eachTask) => {
      if (eachTask.completed === true) {
        return (
          <li key={eachTask.task} className='completed'>
            {eachTask.task}
          </li>
        );
      } else {
        return <li key={eachTask.task}>{eachTask.task}</li>;
      }
    });
  };

  return (
    <div>
      <h1>Hola mundo</h1>
      <h2>Mi lista de tareas: </h2>
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
