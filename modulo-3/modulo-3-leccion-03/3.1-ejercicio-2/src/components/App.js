import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleWrite = (ev) => {
    const text = ev.currentTarget.value;
    return setText(text.replaceAll(/[aeiou]/gi, 'i'));
  };
  return (
    <div>
      <p>{text}</p>
      <textarea
        name='mimimi'
        cols='30'
        rows='10'
        onKeyUp={handleWrite}
      ></textarea>
    </div>
  );
}

export default App;
