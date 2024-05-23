// /backend/routes/ventasRoutes.js

// /backend/routes/ventasRoutes.js

// POST: Crear una nueva venta con procesamiento de pago
router.post('/', async (req, res) => {
    try {
      // Lógica para procesar el pago aquí (ejemplo: verificar tarjeta, procesar transacción, etc.)
      // Registra la venta en la base de datos
      const venta = new Venta(req.body);
      await venta.save();
      // Generar factura o recibo
      // Enviar la factura o recibo al cliente (por ejemplo, enviar por correo electrónico)
      res.status(201).json(venta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
