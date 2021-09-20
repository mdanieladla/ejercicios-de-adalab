import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('default');
  const handleDarkMode = () => {
    if (theme === 'default') {
      setTheme('dark');
    } else {
      setTheme('default');
    }
  };
  const renderDarkModeText = () => {
    if (theme === 'dark') {
      return 'Tienes activado el dark mode';
    } else {
      return null;
    }
  };
  return (
    <div className={theme}>
      <button onClick={handleDarkMode}>Des / Activar dark mode</button>
      <p>{renderDarkModeText()}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        perspiciatis vitae debitis sunt voluptas ab adipisci facere eius commodi
        quas ipsam repudiandae, ducimus maiores distinctio quasi autem dolorem
        consequatur voluptatum!
      </p>
    </div>
  );
}

export default App;
