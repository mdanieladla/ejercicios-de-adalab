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
      <div onClick={handleMenu} className={`${menu}`}>
        <i className='fas fa-ellipsis-h'></i>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          excepturi minima ullam corporis quaerat possimus asperiores nemo
          obcaecati illum, nisi iusto ex fuga eum voluptate voluptatum
          laboriosam veritatis? Itaque, voluptas.
          <ul>
            <li>Octubre</li>
            <li>Noviembre</li>
            <li>Diciembre</li>
          </ul>
        </p>
      </div>
      <i className='fas fa-bars' onClick={handleMenu}></i>
    </div>
  );
}

export default App;
