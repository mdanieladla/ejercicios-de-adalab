import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState('');
  const handleMenu = () => {
    if (menu === '') {
      setMenu('menu-hidden');
    } else {
      setMenu('');
    }
  };
  return (
    <div>
      <h1>Hola mundo</h1>
      <i className={`fas fa-ellipsis-h ${menu}`} onClick={handleMenu}></i>
      <nav onClick={handleMenu}>
        <i className={`fas fa-bars ${menu}`}></i>
        <ul>
          <li>Octubre</li>
          <li>Noviembre</li>
          <li>Diciembre</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
