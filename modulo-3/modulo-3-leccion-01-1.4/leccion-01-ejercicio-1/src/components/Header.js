import logo from '../images/adalab-logo-155x61.png';

const Header = () => {
  return (
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
  );
};

export default Header;
