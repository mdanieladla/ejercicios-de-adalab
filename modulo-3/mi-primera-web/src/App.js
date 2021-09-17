import logo from './logo.svg';
import './App.css';

function App() {
  const handleInput = (ev) => {
    console.log(ev.target.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Aprende React!!
        </a>
      </header>
      <form>
        <label className='title' htmlFor='name'>
          Indica tu nombre
        </label>
        <input type='text' id='name' onChange={handleInput} />
      </form>
    </div>
  );
}

export default App;
