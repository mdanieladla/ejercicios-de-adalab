import '../styles/App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=paranormal')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
