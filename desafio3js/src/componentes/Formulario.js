import React, { useState } from 'react';
import './Formulario.css'; 

function Form({ onSubmitForm }) {
  const [desc, setDesc] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad && desc) {
      const nuevaPildora = {
        cantidad,
        desc,
      };
      onSubmitForm(nuevaPildora);

      // Limpiar los campos de descripción y cantidad
      setDesc('');
      setCantidad('');
    }
  };

  return (
    <div>
      <br />
      <form className='container' onSubmit={handleSubmit}>
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
    </div>
  );
}

export default Form;
