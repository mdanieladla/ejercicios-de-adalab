import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
