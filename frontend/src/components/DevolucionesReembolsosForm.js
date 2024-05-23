// /frontend/src/components/DevolucionesReembolsosForm.js

import React, { useState } from 'react';

const DevolucionesReembolsosForm = () => {
  const [datosDevolucion, setDatosDevolucion] = useState({
    producto: '',
    motivo: '',
    cantidad: 1,
    metodoReembolso: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosDevolucion((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario al backend
    console.log(datosDevolucion);
  };

  return (
    <div>
      <h2>Devoluciones y Reembolsos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Producto:</label>
          <input
            type="text"
            name="producto"
            value={datosDevolucion.producto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Motivo:</label>
          <input
            type="text"
            name="motivo"
            value={datosDevolucion.motivo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cantidad:</label>
          <input
            type="number"
            name="cantidad"
            value={datosDevolucion.cantidad}
            onChange={handleChange}
            min="1"
          />
        </div>
        <div>
          <label>Método de Reembolso:</label>
          <select
            name="metodoReembolso"
            value={datosDevolucion.metodoReembolso}
            onChange={handleChange}
          >
            <option value="">Seleccione un método de reembolso</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </div>
        <button type="submit">Enviar Devolución</button>
      </form>
    </div>
  );
};

export default DevolucionesReembolsosForm;
