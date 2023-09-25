import React, { useState } from 'react';
import './Formulario.css'; 

function Form() {
  const [desc, setDesc] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [pildoras, setPildoras] = useState([]);

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad && desc) {
      // Crear una nueva píldora con Bootstrap y agregarla al estado de píldoras
      const nuevaPildora = (
        <div key={pildoras.length} className="pildora">
          {cantidad} - {desc}
          <button
            className="btn"
            onClick={() => handlePildoraEliminar(pildoras.length)}
          >
            x
          </button>
        </div>
      );
      setPildoras([...pildoras, nuevaPildora]);

      // Limpiar los campos de descripción y cantidad
      setDesc('');
      setCantidad('');
    }
  };

  const handlePildoraEliminar = (index) => {
    const pildorasCopia = [...pildoras];
    pildorasCopia.splice(index, 1);
    setPildoras(pildorasCopia);
  };

  return (
    <div>
      <br />
      <form className='conteiner' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">Cantidad</label>
          <select
            className="form-select"
            id="cantidad"
            value={cantidad}
            onChange={handleCantidadChange}
          >
            <option value="">Selecciona una cantidad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Obtener</button>
      </form>
      <div className="mt-3">
        {pildoras.map((pildora, index) => (
          <React.Fragment key={index}>{pildora}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Form;
