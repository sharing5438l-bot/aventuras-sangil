const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('Llegó una petición:', req.method, req.url);

    if (req.method === 'GET' && req.url === '/') {
        res.end('Hola desde el servidor');

    } else if (req.method === 'GET' && req.url === '/actividades') {
        // Para mandar JSON hay que decirlo en un header
        // y convertirlo a texto manualmente
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify([
            {
                id: 1,
                nombre: 'Rafting'
            }
        ]));

    } else {
        res.statusCode = 404;
        res.end('Ruta no encontrada');
    }
});

servidor.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});