// /frontend/src/components/DescuentosPromocionesForm.js

import React, { useState } from 'react';

const DescuentosPromocionesForm = () => {
  const [datosDescuento, setDatosDescuento] = useState({
    codigoDescuento: '',
    porcentaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosDescuento((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario al backend
    console.log(datosDescuento);
  };

  return (
    <div>
      <h2>Descuentos y Promociones</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Código de Descuento:</label>
          <input
            type="text"
            name="codigoDescuento"
            value={datosDescuento.codigoDescuento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Porcentaje:</label>
          <input
            type="number"
            name="porcentaje"
            value={datosDescuento.porcentaje}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>
        <button type="submit">Aplicar Descuento</button>
      </form>
    </div>
  );
};

export default DescuentosPromocionesForm;
