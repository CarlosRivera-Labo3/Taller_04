const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Endpoint de salud
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'El API está funcionando correctamente ✅',
    timestamp: new Date().toISOString(),
    service: 'Taller IV API',
    version: '1.0.0'
  });
});

// Endpoint de información de integrantes
app.get('/api/info', (req, res) => {
  res.json({
    curso: 'Programación Web',
    ciclo: '02-2026',
    taller: 'Taller IV',
      integrantes: [
    {
      id: 1,
      nombre: 'Orlando Emmanuel Herrera Estrada',
      edad: 25, // <-- Cambia por tu edad real
      carrera: 'Ingeniería en Sistemas', // <-- Cambia por tu carrera
      materiasAprobadas: 15 // <-- Cambia por tus materias reales
    },
    {
      id: 2,
      nombre: 'Carlos Rigoberto Rivera Garcia',
      edad: 21, // <-- Cambia por su edad real
      carrera: 'Ingeniería en Sistemas', // <-- Cambia por su carrera
      materiasAprobadas: 18 // <-- Cambia por sus materias reales
    }
  ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`);
});
