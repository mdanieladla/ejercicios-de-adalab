import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [patatas, setPatatas] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [macarrones, setMacarrones] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  const handleIngredient = (ev) => {
    if (ev.target.id === 'patatas') {
      setPatatas(ev.target.checked);
    } else if (ev.target.id === 'cebolla') {
      setCebolla(ev.target.checked);
    } else if (ev.target.id === 'huevos') {
      setHuevos(ev.target.checked);
    } else if (ev.target.id === 'macarrones') {
      setMacarrones(ev.target.checked);
    } else if (ev.target.id === 'nueces') {
      setNueces(ev.target.checked);
    } else if (ev.target.id === 'cerveza') {
      setCerveza(ev.target.checked);
    }
  };

  const renderMessage = () => {
    if (patatas && cebolla && huevos) {
      return 'Eres una persona concebollista';
    } else {
      return 'Eres un robot sin paladar';
    }
  };

  const handleCheck = (ev) => {
    ev.preventDefault();
    setPatatas(true);
    setCebolla(true);
    setHuevos(true);
    setMacarrones(true);
    setNueces(true);
    setCerveza(true);
  };

  const handleUncheck = (ev) => {
    ev.preventDefault();
    setPatatas(false);
    setCebolla(false);
    setHuevos(false);
    setMacarrones(false);
    setNueces(false);
    setCerveza(false);
  };
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action=''>
        <label htmlFor=''>
          <input
            type='checkbox'
            name='macarrones'
            id='macarrones'
            value={macarrones}
            onChange={handleIngredient}
          />
          Macarrones
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='patatas'
            id='patatas'
            onChange={handleIngredient}
          />
          Patatas
        </label>
        <label htmlFor=''>
          <input
            type='checkbox'
            name='nueces'
            id='nueces'
            value={nueces}
            onChange={handleIngredient}
          />
          Nueces
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='huevos'
            id='huevos'
            onChange={handleIngredient}
          />
          Huevos
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='cebolla'
            id='cebolla'
            onChange={handleIngredient}
          />
          Cebolla
        </label>
        <label htmlFor=''>
          <input
            type='checkbox'
            name='cerveza'
            id='cerveza'
            value={cerveza}
            onChange={handleIngredient}
          />
          Cerveza
        </label>
      </form>
      <button onClick={handleCheck}>Marcar todos</button>
      <button onClick={handleUncheck}>Desmarcar todos</button>
      <p>{renderMessage()}</p>
    </div>
  );
}

export default App;
