import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    console.log('La tecla pulsada es: ', ev.key);
  };
  const handleButton = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <h1>Hola mundo</h1>
      <form>
        <input type='text' onKeyUp={handleInput} />
        <button onClick={handleButton}>Click me</button>
      </form>
    </div>
  );
}

export default App;
