// /frontend/src/App.js

import React, { useState } from 'react';
import './styles.css';
import VentasForm from './components/VentasForm';
import ProcesamientoPagosForm from './components/ProcesamientoPagosForm';
import GeneracionFacturasForm from './components/GeneracionFacturasForm';
import DescuentosPromocionesForm from './components/DescuentosPromocionesForm';
import DevolucionesReembolsosForm from './components/DevolucionesReembolsosForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard, faFileInvoice, faTags, faUndo } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [currentForm, setCurrentForm] = useState(null);

  const renderForm = () => {
    switch (currentForm) {
      case 'ventas':
        return <VentasForm />;
      case 'pagos':
        return <ProcesamientoPagosForm />;
      case 'facturas':
        return <GeneracionFacturasForm />;
      case 'descuentos':
        return <DescuentosPromocionesForm />;
      case 'devoluciones':
        return <DevolucionesReembolsosForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Aplicación de Supermercado</h1>
      <div className="icon-bar">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="3x"
          onClick={() => setCurrentForm('ventas')}
          title="Registrar Ventas"
          className="icon"
        />
        <FontAwesomeIcon
          icon={faCreditCard}
          size="3x"
          onClick={() => setCurrentForm('pagos')}
          title="Procesar Pagos"
          className="icon"
        />
        <FontAwesomeIcon
          icon={faFileInvoice}
          size="3x"
          onClick={() => setCurrentForm('facturas')}
          title="Generar Facturas"
          className="icon"
        />
        <FontAwesomeIcon
          icon={faTags}
          size="3x"
          onClick={() => setCurrentForm('descuentos')}
          title="Descuentos y Promociones"
          className="icon"
        />
        <FontAwesomeIcon
          icon={faUndo}
          size="3x"
          onClick={() => setCurrentForm('devoluciones')}
          title="Devoluciones y Reembolsos"
          className="icon"
        />
      </div>
      {renderForm()}
    </div>
  );
};

export default App;

