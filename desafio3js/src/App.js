import React from 'react';
import './App.css';
import Formulario from './componentes/Formulario'
import Vista from './componentes/Edaman';


function App() {
    return (
      <div className="App">
        <nabvar className = "navbar">
            recetas locas
        </nabvar>
        <Formulario />
        <Vista />
        <footer className="footer">
          <div>
        <p>Pagina creada por Joaquin Suarez y mi gran amigo el chat jeep pee tee</p>
          </div>
        </footer>
      </div>
    );
  }
  
export default App; 
  