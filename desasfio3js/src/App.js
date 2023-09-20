import React, { useState } from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = useState('');

  function cambios(e) {
    e.preventDefault();
  }
  return (
    <div>
      <br />
      <form onSubmit={cambios}>
        <label>descripcion</label>
        <input onChange={(e) => setDesc(e.target.value)} />
        <br />
        <button type="sumbit">obtener</button>
      </form>
    </div>
  );
}

export default App;
