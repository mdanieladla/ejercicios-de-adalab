import callToApi from '../services/api';
import { useEffect, useState } from 'react';

function App() {
  const [shows, setShows] = useState([]);
  const [serie, setSerie] = useState('');

  useEffect(() => {
    callToApi(serie).then((response) => {
      setShows(response);
    });
  }, [serie]);

  const handleSearch = (ev) => {
    setSerie(ev.target.value);
  };

  const renderSerie = () => {
    return shows.map((show, index) => {
      return <li key={index}>Nombre: {show.name}</li>;
    });
  };

  return (
    <div className='page'>
      <label htmlFor='name'>Busca tu serie</label>
      <input type='text' onChange={handleSearch} value={serie} />

      <ul>{renderSerie()}</ul>
    </div>
  );
}

export default App;
