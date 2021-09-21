import '../styles/App.scss';

function App() {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTasks = () => {
    return tasks.map((task) => {
      return <li>{task}</li>;
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
