import React, { useState, useEffect } from 'react';
import './Formulario.css';
import Form from './Formulario';

function Edamam() {
  const [selectRegion, setSelectRegion] = useState('');
  const [selectComida, setSelectComida] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [pildoras, setPildoras] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');
  const appId = 'a9eb7400';
  const appKey = '51aae2dbbacf7399f6d00197db49171a';

  useEffect(() => {
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&dishType=${selectComida}&cuisineType=${selectRegion}&app_id=${appId}&app_key=${appKey}`;

    if (searchQuery !== '' && selectComida !== '' && selectRegion !== '') {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`La solicitud falló con estado: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          const limitedRecipes = responseData.hits.slice(0, 2);
          setRecipes(limitedRecipes);
        })
        .catch((error) => {
          console.error('Hubo un error al hacer la solicitud:', error);
        });
    }
  }, [searchQuery, selectComida, selectRegion]);

  const handleFormSubmit = (newPill) => {
    setPildoras([...pildoras, newPill]);
  };

  const handleRegionChange = (event) => {
    setSelectRegion(event.target.value);
  };

  const handleDishTypeChange = (event) => {
    setSelectComida(event.target.value);
  };

  const handleGenerateRecipe = () => {
    const keywords = pildoras.map((pildora) => pildora.desc).join(' ');
    // Construir la URL de la API
    const apiUrl = `https://api.edamam.com/search?q=${keywords}&dishType=${selectComida}&cuisineType=${selectRegion}&app_id=${appId}&app_key=${appKey}`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`La solicitud falló con estado: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        const limitedRecipes = responseData.hits.slice(0, 2);
        setRecipes(limitedRecipes);
      })
      .catch((error) => {
        console.error('Hubo un error al hacer la solicitud:', error);
      });
  };

  return (
    <div className="container">
      <h1>Busca una receta según tus gustos</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Ingrese palabras clave"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleGenerateRecipe}>Generar Receta</button>
      </div>
      <div className="pills-container">
        {pildoras.map((pildora, index) => (
          <div key={index} className="pildora">
            {pildora.cantidad} - {pildora.desc}
          </div>
        ))}
      </div>
      <select value={selectRegion} onChange={handleRegionChange}>
        <option value="">Selecciona una región</option>
        <option value="Italian">Italiana</option>
        <option value="Mexican">Mexicana</option>
        <option value="Indian">India</option>
        <option value="Asian">Asian</option>
        <option value="mundo">Mundo</option>
      </select>
      <select value={selectComida} onChange={handleDishTypeChange}>
        <option value="">Selecciona un tipo de alimento</option>
        <option value="Pizza">Pizza</option>
        <option value="Pasta">Pasta</option>
        <option value="Salad">Ensalada</option>
      </select>
      <div id="response">
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipe.label}</h2>
            <p>Instrucciones: {recipe.recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edamam;
