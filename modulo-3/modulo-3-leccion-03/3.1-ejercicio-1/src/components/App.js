import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [checked, setIsChecked] = useState();

  const handleChecked = (ev) => {
    setIsChecked(ev.target.checked);
  };

  const person = () => {
    if (checked) {
      return 'Eres una persona concebollista';
    } else {
      return 'Eres un robot sin paladar';
    }
  };
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action=''>
        <label htmlFor=''>
          <input type='checkbox' name='macarrones' id='1' />
          Macarrones
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='patatas'
            id='2'
            checked={checked}
            onChange={handleChecked}
          />
          Patatas
        </label>
        <label htmlFor=''>
          <input type='checkbox' name='nueces' id='3' />
          Nueces
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='huevos'
            id='4'
            checked={checked}
            onChange={handleChecked}
          />
          Huevos
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='cebolla'
            id='5'
            checked={checked}
            onChange={handleChecked}
          />
          Cebolla
        </label>
        <label htmlFor=''>
          <input type='checkbox' name='cerveza' id='6' />
          Cerveza
        </label>
      </form>
      <p>{person()}</p>
    </div>
  );
}

export default App;
