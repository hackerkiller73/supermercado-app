// /frontend/src/components/GeneracionFacturasForm.js

import React, { useState } from 'react';

const GeneracionFacturasForm = () => {
  const [datosFactura, setDatosFactura] = useState({
    numeroFactura: '',
    fecha: '',
    total: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosFactura((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario al backend
    console.log(datosFactura);
  };

  return (
    <div>
      <h2>Generación de Facturas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número de Factura:</label>
          <input
            type="text"
            name="numeroFactura"
            value={datosFactura.numeroFactura}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={datosFactura.fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Total:</label>
          <input
            type="number"
            name="total"
            value={datosFactura.total}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Generar Factura</button>
      </form>
    </div>
  );
};

export default GeneracionFacturasForm;
