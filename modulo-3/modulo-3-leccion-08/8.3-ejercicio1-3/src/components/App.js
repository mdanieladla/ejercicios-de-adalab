import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Overview from './Overview';
import Repositories from './Repositories';

const App = () => {
  return (
    <div>
      <h2>Copia de Github</h2>
      <nav>
        <ul>
          {/* Hya que pner el route para definir la ruta */}
          <Switch>
            <Route path='/Overview'>
              <Overview />
            </Route>
            {/* hay que poner el link to para que cuando pulse en ese link te lleve a la ruta definida */}
            <Link to='/Overview'>Ir a Overview</Link>
            {/* otro */}
            <Route path='/Repositories'>
              <Repositories />
            </Route>
            <Link to='/Repositories'>Ir a respositorios</Link>
          </Switch>
          <li>
            <a href='/packages'>Packages</a>
          </li>
          <li>
            <a href='/people'>People</a>
          </li>
          <li>
            <a href='/teams'>Teams</a>
          </li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/settings'>Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
