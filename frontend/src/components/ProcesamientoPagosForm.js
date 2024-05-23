// /frontend/src/components/ProcesamientoPagosForm.js

import React, { useState } from 'react';

const ProcesamientoPagosForm = () => {
  const [datosPago, setDatosPago] = useState({
    monto: '',
    metodoPago: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosPago((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario al backend
    console.log(datosPago);
  };

  return (
    <div>
      <h2>Procesamiento de Pagos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto:</label>
          <input
            type="number"
            name="monto"
            value={datosPago.monto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Método de Pago:</label>
          <select
            name="metodoPago"
            value={datosPago.metodoPago}
            onChange={handleChange}
          >
            <option value="">Seleccione un método de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            {/* Agrega más opciones de método de pago según sea necesario */}
          </select>
        </div>
        <button type="submit">Procesar Pago</button>
      </form>
    </div>
  );
};

export default ProcesamientoPagosForm;
