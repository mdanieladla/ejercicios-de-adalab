import '../styles/App.scss';

function App() {
  const handleWrite = (ev) => {
    return ev.target.value;
  };
  return (
    <div>
      <p onKeyUp={handleWrite}></p>
      <textarea name='mimimi' cols='30' rows='10'></textarea>
    </div>
  );
}

export default App;
