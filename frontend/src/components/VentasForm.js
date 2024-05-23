// /frontend/src/components/VentasForm.js

import React, { useState } from 'react';

const VentasForm = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [metodoPago, setMetodoPago] = useState('');

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario al backend
    console.log({ fecha, hora, metodoPago });
  };

  return (
    <div>
      <h2>Registro de Ventas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fecha:</label>
          <input type="date" value={fecha} onChange={handleFechaChange} />
        </div>
        <div>
          <label>Hora:</label>
          <input type="time" value={hora} onChange={handleHoraChange} />
        </div>
        <div>
          <label>Método de Pago:</label>
          <select value={metodoPago} onChange={handleMetodoPagoChange}>
            <option value="">Seleccione un método de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="qr">Qr</option>
            {/* Agrega más opciones de método de pago según sea necesario */}
          </select>
        </div>
        <button type="submit">Registrar Venta</button>
      </form>
    </div>
  );
};

export default VentasForm;
