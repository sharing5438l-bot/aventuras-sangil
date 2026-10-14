// metodo


// // servidor-nativo.js

// const http = require('http');
// // Esta función se ejecuta UNA VEZ por cada petición que llega
// const servidor = http.createServer((req, res) => {
// console.log('Llegó una petición:', req.method, req.url);
// if (req.method === 'GET' && req.url === '/') {
// res.end('Hola desde el servidor');
// } else if (req.method === 'GET' && req.url === '/actividades') {
// // Para mandar JSON hay que decirlo en un header y convertir a texto a mano
// res.setHeader('Content-Type', 'application/json');
// res.end(JSON.stringify([{ id: 1, nombre: 'Rafting' }]));
// } else {
// res.statusCode = 404;
// res.end('Ruta no encontrada');
// }
// });
// servidor.listen(3000, () => {
// console.log('Escuchando en http://localhost:3000');
// });

// metodo 3

// const express = require('express');
// const app = express();
// app.use((req, res, next) => {
// console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
// next();
// });
// const PORT = process.env.PORT || 3000;
// const actividades = [
// { id: 1, nombre: 'Rafting en el río Fonce', tipo: 'agua', precio: 60000 },
// { id: 2, nombre: 'Parapente en el cañón', tipo: 'aire', precio: 180000 },
// { id: 3, nombre: 'Caminata Camino Real a Barichara', tipo: 'tierra', precio: 0 },
// { id: 4, nombre: 'Torrentismo en cascada', tipo: 'agua', precio: 70000 },
// ];

// app.get('/actividades', (req, res) => {
// console.log('query:', req.query);
// const { tipo } = req.query;
// if (!tipo) {
// return res.json(actividades);
// }
// const filtradas = actividades.filter((a) => a.tipo === tipo);
// res.json(filtradas);
// });

// app.get('/', (req, res) => {
// res.send('API Aventuras San Gil funcionando');
// });

// app.get('/actividades/:id', (req, res) => {
// const id = Number(req.params.id);
// const actividad = actividades.find((a) => a.id === id);
// if (!actividad) {
// return res.status(404).json({ mensaje: `No existe la actividad con id ${req.params.id}`
// });
// }
// res.json(actividad);
// });
// app.listen(PORT, () => {
// console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });


// metodo 4

// const express = require('express');
// const app = express();


// const actividades = [
//   { id: 1, nombre: 'Rafting en el río Fonce', tipo: 'agua', precio: 60000 },
//   { id: 2, nombre: 'Parapente en el cañón', tipo: 'aire', precio: 180000 },
//   { id: 3, nombre: 'Caminata Camino Real a Barichara', tipo: 'tierra', precio: 0 },
//   { id: 4, nombre: 'Torrentismo en cascada', tipo: 'agua', precio: 70000 },
// ];


// app.get('/actividades', (req, res) => {
//   console.log('query:', req.query);
//   const { tipo } = req.query;
  
 
//   if (!tipo) {
//     return res.json(actividades);
//   }
//   const tipoMinuscula = tipo.toLowerCase();
//   const filtradas = actividades.filter((a) => a.tipo.toLowerCase() === tipoMinuscula);
  
//   res.json(filtradas);
// });

// app.get('/actividades/:id', (req, res) => {
//   console.log('params:', req.params);
  
//   const id = Number(req.params.id);
//   const actividad = actividades.find((a) => a.id === id);
  

//   if (!actividad) {
//     return res.status(404).json({ 
//       mensaje: `No existe la actividad con id ${req.params.id}` 
//     });
//   }
  
//   res.json(actividad);
// });


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor de Aventuras San Gil corriendo en http://localhost:${PORT}`);
// });

//5 y 6 y retos

const express = require('express');
const app = express();

app.use(express.json());

let actividades = [
{ id: 1, nombre: "Rafting en el río Fonce", tipo: "agua", precio: 60000 },
{ id: 2, nombre: "Caminata ecológica por el Rodadero", tipo: "tierra", precio: 0 }
];

app.get('/estado', (req, res) => {
res.json({
servidor: "ok",
hora: new Date().toISOString(),
totalActividades: actividades.length
});
});

app.get('/actividades', (req, res) => {
res.json(actividades);
});

app.get('/actividades/gratis', (req, res) => {
const gratis = actividades.filter(a => a.precio === 0);
res.json(gratis);
});

app.post('/actividades', (req, res) => {
const { nombre, tipo, precio } = req.body;


if (!nombre) {
return res.status(400).json({ mensaje: "Falta el campo obligatorio: nombre" });
}
if (!tipo) {
return res.status(400).json({ mensaje: "Falta el campo obligatorio: tipo" });
}


if (typeof precio !== 'number' || isNaN(precio) || precio < 0) {
return res.status(400).json({ mensaje: "El precio debe ser un número válido y no puede ser negativo" });
}

const nueva = {
id: actividades.length + 1,
nombre,
tipo,
precio
};

actividades.push(nueva);
res.status(201).json(nueva);
});

app.use((req, res) => {
res.status(404).json({ mensaje: `No existe la ruta ${req.method} ${req.url}` });
});

app.listen(3000, () => {
console.log('Servidor corriendo en http://localhost:3000');
});