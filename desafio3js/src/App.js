import React from 'react';
import './App.css';
import Formulario from './componentes/Formulario'
import Vist from './controllers/Edaman';


function App() {
    return (
      <div className="App">
        <nabvar className = "nabvar">
            recetas locas
        </nabvar>
        <Formulario />
        <Vist />
        <footer className="footer">
          <div className="footer-content">
        <p>Pagina creada por Joaquin Suarez y mi gran amigo el chat jeep pee tee</p>
          </div>
        </footer>
      </div>
    );
  }
  
export default App; 
  