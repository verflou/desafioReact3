import React, { useState } from 'react';
import './Formulario.css';

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== "undefined") {
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

function Edamam() {
  const [app_id, setAppId] = useState('');
  const [app_key, setAppKey] = useState('');
  const [recipe, setRecipe] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAppIdChange = (event) => {
    setAppId(event.target.value);
  };

  const handleAppKeyChange = (event) => {
    setAppKey(event.target.value);
  };

  const handleRecipeChange = (event) => {
    setRecipe(event.target.value);
  };

  const makeCorsRequest = () => {
    setLoading(true);

    var url = `https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`;

    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
      alert('CORS not supported');
      setLoading(false);
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      setResponse(text);
      setLoading(false);
    };

    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
      setLoading(false);
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(recipe);
  };

  return (
    <div>
      <h1>Nutrition Analysis API</h1>
      <label htmlFor="app_id">app_id:</label>
      <input type="text" name="app_id" id="app_id" value={app_id} onChange={handleAppIdChange} />
      <br />
      <label htmlFor="app_key">app_key:</label>
      <input type="text" name="app_key" id="app_key" value={app_key} onChange={handleAppKeyChange} />
      <br />
      <textarea id="recipe" rows="20" cols="80" value={recipe} onChange={handleRecipeChange}>
      </textarea>
      <br />
      <button type="button" onClick={makeCorsRequest}>Submit</button>
      <hr /> Response:
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre id="response">{response}</pre>
      )}
    </div>
  );
}

export default Edamam;
