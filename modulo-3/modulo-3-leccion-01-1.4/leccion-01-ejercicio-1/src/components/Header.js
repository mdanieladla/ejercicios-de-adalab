import '../styles/Header.scss';
import logo from '../images/adalab-logo-155x61.png';
import Links from './Link';

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
          <Links openInNewTab={true} className='link' text='Blog' />
          <Links openInNewTab={false} className='link' text='Contacto' />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
