import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    <div>
      <header className='header__container'>
        <a href='https://adalab.es/' rel='noreferrer' target='_blank'>
          <img
            src={logo}
            alt='logo adalab'
            className='header__container--logo'
            title='Ir a la página principal de Adalab'
          />
        </a>
        <nav className='nav'>
          <ul className='menu'>
            <li>
              <a
                href='https://adalab.es/blog/'
                rel='noreferrer'
                target='_blank'
                className='link'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='https://adalab.es/contacto/'
                rel='noreferrer'
                target='_blank'
                className='link'
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <h1 className='title'>Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
