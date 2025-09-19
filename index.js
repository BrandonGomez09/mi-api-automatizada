// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/mensaje', (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'El campo "mensaje" es requerido.' });
  }

  console.log(`Mensaje recibido: ${mensaje}`);

  res.status(200).json({
    respuesta: `Tu mensaje "${mensaje}" fue recibido correctamente.`
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});