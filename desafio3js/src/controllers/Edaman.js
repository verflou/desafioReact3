import React from 'react';

function Vist() {
  function makeCorsRequest() {
    let app_id = document.getElementById('app_id').value;
    let app_key = document.getElementById('app_key').value;
    let recipe = document.getElementById('recipe').value;
    let pre = document.getElementById('response');
    var url = 'https://api.edamam.com/api/nutrition-details?app_id=' + app_id + '&app_key=' + app_key;
  
    // Crear un objeto de opciones para la solicitud fetch
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indicar que se está enviando JSON
      },
      body: JSON.stringify({ recipe }), // Convertir el objeto recipe a JSON y enviarlo en el cuerpo de la solicitud
    };
  
    // Realizar la solicitud CORS utilizando fetch
    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        pre.innerHTML = JSON.stringify(data, null, 2); // Mostrar la respuesta en el elemento pre
      })
      .catch((error) => {
        alert('Woops, there was an error making the request: ' + error.message);
      });
  }
  
  return (
    
      <div>
      <head>
        <meta charSet="utf-8" />
        <title>Edamam API Test</title>
      </head>
        <h1>Nutrition Analysis API</h1>

        <label htmlFor="app_id">app_id:</label>
        <input type="text" name="app_id" id="app_id" />
        <br />
        <label htmlFor="app_key">app_key:</label>
        <input type="text" name="app_key" id="app_key" />
        <br />
        <textarea id="recipe" rows="20" cols="80">
  "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
  "yield": "About 15 servings",
  "ingr": [
    "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
    "7 cloves garlic, minced",
    "1 tablespoon caraway seeds, crushed",
    // ...otros elementos
  ]

</textarea>
      <button type="button" onClick={makeCorsRequest}>
        Submit
      </button>
      <hr /> Response:
        <br />
        <pre id="response"></pre>
    </div>
  );
}

export default Vist;
