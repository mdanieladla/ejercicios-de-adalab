import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className='header'>
        <nav>
          <a
            href='https://adalab.es/'
            rel='noreferrer'
            target='_blank'
            className='header__icomenu'
          >
            <img
              src='./assets/images/ico-menu.svg'
              alt='menú'
              title='Go to the page of Adalab'
            />
          </a>
        </nav>
        <div className='header__container' id='top'>
          <h1 className='header__container--title'>Anonymous proxy</h1>
          <h2 className='header__container--paragraph'>
            In hac habitasse platea dictumst.
          </h2>
          <a href='#purchase'>
            <img
              src='./assets/images/ico-scroll-down.svg'
              alt='scroll down icon'
              className='button__scroll-down'
              title='Go to 3 reasons to purchase'
            />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
